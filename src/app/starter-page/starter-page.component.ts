import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import data from '../logo-data';

@Component({
  selector: 'app-starter-page',
  templateUrl: './starter-page.component.html',
  styleUrls: ['./starter-page.component.css']
})
export class StarterPageComponent implements OnInit {

  breakpoint: number;
  subscription: Subscription;
  browserRefresh = false;
  LogoData = data;

  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.ngOnInit;
      }
    });
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= window.screen.width / 2) ? 2 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= window.screen.width / 2) ? 2 : 4;
  }





}

