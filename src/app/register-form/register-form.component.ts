import { Component } from '@angular/core';
import { FormGroup ,ReactiveFormsModule ,FormBuilder ,Validators, FormControl, AbstractControl} from '@angular/forms';
import Validation from './validation';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
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
      // fullname: ['', Validators.required],
      // username: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(6),
      //     Validators.maxLength(20),
      //   ],
      // ],
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
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    },
    {
      validators: [Validation.match('password', 'confirmPassword')],
    }
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

onReset(): void {
  this.submitted = false;
  this.form.reset();
}





}



