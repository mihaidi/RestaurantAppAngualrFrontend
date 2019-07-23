import { MenuServiceService } from './../menu-service.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'



@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {


  menuResponse;

  constructor(private menuService: MenuServiceService) { }

  ngOnInit() {

    this.menuService.getAllMenu().subscribe(data => {
      this.menuResponse = data.content;
      console.log(data);
      console.log(this.menuResponse)


    })




  }

}
