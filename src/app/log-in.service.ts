import { UserData } from './user-data';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';



@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private URL: string = "//localhost:8762/user/api/users";

  trigerOnInitFromNabBar = new EventEmitter();
  subVar: Subscription;

  private userData = new BehaviorSubject<UserData>(null);
  public userData$ = this.userData.asObservable();


  isLogedIn = false;


  constructor(private http: HttpClient,
    @Inject(SESSION_STORAGE) private storage: StorageService) {

  }



  loginUser(loginData: any): Observable<any> {

    return this.http.post(this.URL + "/login", loginData).pipe(map(data => {
      return data;
    }))
  }

  editUser(newUserData: any, id: number): Observable<any> {
    let url = `//localhost:8762/user/api/users/edit/${id}`;
    return this.http.post(url, newUserData).pipe(map(data => {
      return data;
    }));
  }


  setLoginInformation(response) {
    this.userData.next(response);
    console.log(this.userData$)
  }


  getUserDataById(id: any): Observable<any> {
    return this.http.get(this.URL + `/profile/${id}`);
  }


  onLoginButtonClick() {
    this.trigerOnInitFromNabBar.emit();
  }

  uploadPhoto(formData: FormData, userId: string): Observable<any> {
    var photoUrl = "//localhost:8762/user/api/photo/uploadPhoto";
    const params = new HttpParams().set('userId', userId).set('fileType','PROFILE_PIC');

    return this.http.post<any>(photoUrl, formData, { params });
  }

  displayPhoto(imageUrl: string): Observable<any> {
    var downloadUrl = "http://localhost:8762/user/api/photo/downloadPhoto"
    const params = new HttpParams()
      .set('fileName', imageUrl);

    return this.http.get<any>(downloadUrl, { params })
  }


}
