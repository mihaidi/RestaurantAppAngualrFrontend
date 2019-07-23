import { Menu } from './menu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private URL = "//localhost:8762/menu/api/admin/menus";




  constructor(private http: HttpClient) { }




  getAllMenu(): Observable<any> {
    return this.http.get<any>(this.URL);
  }


}
