import { UserData } from './../user-data';
import { LogInService } from './../log-in.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import data from '../logo-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData: Observable<UserData>;
  form: FormGroup;

  uploadForm: FormGroup;
  recivedData: any;

  isEnabled = " ";
  localData: UserData;


  subscribedUserData: UserData;

  imageUrl = " ";

  isFileStore = false;




  constructor(private login: LogInService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.uploadForm = this.formBuilder.group({
      photo: ['']
    });


    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    const userID = JSON.parse(localStorage.getItem('userId'));
    console.log(userID);


    this.login.getUserDataById(userID).subscribe(data => {
      this.localData = data;
      console.log(this.localData)
      this.form.patchValue(this.localData);
      console.log(this.form.value)
      this.imageUrl = "http://localhost:8762/user/api/photo/downloadPhoto?fileName=" + this.localData.photoData[0].relUrl;
    });




    this.login.userData$.subscribe(data => {
      this.subscribedUserData = data;
    });
  }

  enableEdit() {
    this.isEnabled = null;
  }


  editUserData() {
    let body = this.form.value;
    console.log(body);
    this.login.editUser(body, this.localData.id).subscribe(data => {
      this.localData = data;
    })
    this.isEnabled = " ";
  }


  handleFileSelect(event) {
    if (event.target.files.length > 0) {
      let photo = event.target.files[0];
      this.uploadForm.get('photo').setValue(photo);
      this.isFileStore = true;
      console.log(photo);
    }
  }


  photoSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('photo').value);
    const userId = JSON.parse(localStorage.getItem("userId"));

    this.login.uploadPhoto(formData, userId).subscribe(data => {
      this.recivedData = data;

      console.log(this.recivedData.relUrl);
    });

  }
}
