import { UserData } from './../user-data';
import { ValidationService } from './../validation-service';
import { RegisterService } from './../register.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router"
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerForm: FormGroup;
  ServerResponse: UserData;

  error: string;

  constructor(private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router) {


    this.registerForm = this.formBuilder.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15), ValidationService.firstNameValidation])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15), ValidationService.lastNameValidation])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'password': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
      'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      'phoneNumber': ['', Validators.required]
    });
  }

  registerUser() {
    var body = this.registerForm.value;
    console.log(body);

    if (this.registerForm.dirty && this.registerForm.valid) {

      console.log(this.registerForm.value);
      this.registerService.registerUser(body)
        .subscribe(data => {
          this.ServerResponse = data;
          console.log(this.ServerResponse);
          console.log(body);

          this.registerForm.reset();
          this.router.navigate(['/login'])


        }, err => {

          this.error = err;
          console.log(err);
          // if (err === null) {
          //   this.registerForm.reset();
          //   this.router.navigate(['/login'])
          // }
        });
    }

  }

  resetForm() {
    if (this.registerForm.dirty) {
      this.registerForm.reset();
    }
  }

}
