import { Component } from '@angular/core';
import { MyService } from '../myService';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup ,ReactiveFormsModule ,FormBuilder ,Validators, FormControl, AbstractControl} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterFormComponent } from '../register-form/register-form.component';
import Validation from './validation';
import * as CryptoJS from 'crypto-js';

// const password = 'mySecretPassword';
// const hashedPassword = CryptoJS.SHA256(password).toString();

// const routes: Routes = [{
//   component:RegisterFormComponent,
//   path:"/about"
// }];

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
});
submitted = false;
about: string|any[]|null|undefined;
constructor(
  private formBuilder: FormBuilder,
  private myService: MyService,
  private http:HttpClient,
  private router:Router
  ) {}
ngOnInit(): void{

    this.form = this.formBuilder.group(
      {
        email : new FormControl('',[ Validators.minLength(5), Validators.required ]),
        // email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
            Validators.pattern(/[a-z]/),
            Validators.pattern(/[A-Z]/),
            Validators.pattern(/\d/),
          ],
        ],
      },

    );

}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
login:any

async onsubmit(form:FormGroup){
  console.log(this.form.value)

  const name =form.value.name;
  const email=form.value.email;
  const password =form.value.password;


   this.http.post('http://127.0.0.1:8000/api/login', form.value).subscribe((response :any)=>{
    if (response.status === 200) {
      console.log(response.token);
      localStorage.setItem('token-for-user', response.token);
      Swal.fire({
        icon: 'success',
        title: response.message,
        showConfirmButton: false,
        timer: 3000,
      });
      if (email === 'enicela20@gmail.com' && password === 'Enicela1!') {
        // this.authenticated = true;
        // this.redirectUrl = this.redirectUrl === undefined ? '/' : this.redirectUrl;
        this.router.navigate(['/admindashboard']);
      }
      else{
        this.router.navigate(['/dashboard-user'])
      }
    }
    else if(response.status === 400){
      Swal.fire({
        icon: 'error',
        title: response.message,
        showConfirmButton: false,
        timer: 3000,
      })
    }
   })
// Swal.fire({
//   icon: 'success',
// title: 'Ju u loguat me sukses!',
//   showConfirmButton: false,
//   timer: 3000
// }).then((result) =>
//   this.router.navigate(['/admindashboard'])

// )

}
}
