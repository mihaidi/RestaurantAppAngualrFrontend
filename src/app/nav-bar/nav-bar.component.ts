import { UserData } from './../user-data';
import { LogInService } from './../log-in.service';
import { Router } from "@angular/router";
import { Component, OnInit, Injectable, OnChanges } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  userData: UserData;
  isLogedInLocal: string;
  isLoged: boolean;


  constructor(private loginService: LogInService,
    private router: Router, ) {

  }

  ngOnInit() {
    this.isLogedInLocal = localStorage.getItem("isLoged");
    if (this.isLogedInLocal === "true") {
      this.isLoged = true;
    }
    else if (this.isLogedInLocal == null) {
      this.isLoged = false;
    }

    console.log(this.isLoged);



    if (this.loginService.subVar == undefined) {
      this.loginService.subVar = this.loginService.trigerOnInitFromNabBar.subscribe(data => {
        this.ngOnInit();
      });
    }
  }



  logOut() {
    localStorage.clear();
    this.router.navigate(['login'])
    this.ngOnInit();
  }

}

