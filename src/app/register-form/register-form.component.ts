import { Component } from '@angular/core';
import { FormGroup ,ReactiveFormsModule ,FormBuilder ,Validators, FormControl, AbstractControl, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import Validation from './validation';
import { MyService } from '../myService';
import * as CryptoJS from 'crypto-js';
import { AuthencationService } from '../services/authencation.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  form: FormGroup = new FormGroup({
    //fullname: new FormControl(''),
    //username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    //confirmPassword: new FormControl(''),
    //acceptTerms: new FormControl(false),
});

submitted = false;

constructor(private formBuilder: FormBuilder, private myService: MyService, private http:HttpClient , private auth:AuthencationService) {}
ngOnInit(): void {

  this.form = this.formBuilder.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
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
  //var password = CryptoJS.SHA256(this.form.value.password).toString();
  //return this.myService.submitRegisterData({email : this.form.value.email, password: password});
}

onReset(): void {
  this.submitted = false;
  this.form.reset();
}
postId:any
data:any
onsubmit(form:FormGroup){
  console.log(this.form.value)
  
  const name =form.value.name;
  const email=form.value.email;
  const password =form.value.password;

   this.auth.register(name,email,password,).subscribe((res)=>{
    console.log(res);
   },
   (err)=>{
    console.log(err);
   })
}


}



