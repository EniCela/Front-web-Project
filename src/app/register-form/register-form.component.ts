import { Component } from '@angular/core';
import {FormGroup,ReactiveFormsModule,FormBuilder,Validators,FormControl,AbstractControl,NgForm,}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Validation from './validation';
import Swal from 'sweetalert2';
import { MyService } from '../myService';
import * as CryptoJS from 'crypto-js';
import { AuthencationService } from '../services/authencation.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
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

  constructor(
    private formBuilder: FormBuilder,
    private myService: MyService,
    private http: HttpClient,
    private auth: AuthencationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: new FormControl('', [
        Validators.minLength(5),
        Validators.required,
      ]),
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
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.value.email == '' && this.form.value.password == '') {
      return;
    }
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  postId: any;
  data: any;
  async onsubmit(form: FormGroup) {
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;

    await this.http
      .post('http://127.0.0.1:8000/api/register', form.value)
      .subscribe((response: any) => {
        if (response.status === 200) {
          console.log(response.token);
          localStorage.setItem('token-for-user', response.token);
          Swal.fire({
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 3000,
          }).then((result) => this.router.navigate(['/']));
        }
        else if(response.status === 400){
          Swal.fire({
            icon: 'error',
            title: response.message,
            showConfirmButton: false,
            timer: 3000,
          })
        }
      }
    );
  }
}
