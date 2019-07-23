import { UserData } from './../user-data';
import { LogInService } from './../log-in.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router"


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  logInForm: FormGroup;
  LoginResponse: UserData;

  constructor(private formBuilder: FormBuilder,
    private loginService: LogInService,
    private router: Router) {

    this.logInForm = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15)])],
      'password': ['', Validators.compose([Validators.required])]
    });
  }


  ngOnInit() {
  }

  logIn() {
    var body = this.logInForm.value;

    this.loginService.loginUser(body).subscribe(data => {
      this.LoginResponse = data;

      this.loginService.setLoginInformation(data);


      if (this.LoginResponse != null) {
        this.router.navigate(['']);
        localStorage.setItem("userId", JSON.stringify(this.LoginResponse.id));
        localStorage.setItem("isLoged", "true")
      }
      console.log(this.LoginResponse);

      this.loginService.onLoginButtonClick();
    })
  }






}
