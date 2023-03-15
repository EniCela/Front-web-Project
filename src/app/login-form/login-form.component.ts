import { Component } from '@angular/core';
import { FormGroup ,ReactiveFormsModule ,FormBuilder ,Validators, FormControl, AbstractControl} from '@angular/forms';
import Validation from './validation';

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
constructor(private formBuilder: FormBuilder) {}
ngOnInit(): void {
  this.form = this.formBuilder.group(
    {
      email : new FormControl('',[ Validators.minLength(5), Validators.required ]),
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

onSubmit(): void {
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }

  console.log(JSON.stringify(this.form.value, null, 2));
}

}
