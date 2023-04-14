import { Component } from '@angular/core';
import { MyService } from '../myService';
import { FormGroup ,ReactiveFormsModule ,FormBuilder ,Validators, FormControl, AbstractControl} from '@angular/forms';
import { Routes } from '@angular/router';
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
constructor(private formBuilder: FormBuilder, private myService: MyService) {}
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

onSubmit(){
  if(this.form.value.email == "" && this.form.value.password == ""){
    return ;
  }
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }

  //console.log(JSON.stringify(this.form.value, null, 2));
  var password = CryptoJS.SHA256(this.form.value.password).toString();
  return this.myService.submitLoginData({email : this.form.value.email, password: password});
}

}
