import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  altmobile = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  mobile = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);
  loginemail = new FormControl('', [Validators.required]);
  loginpassword = new FormControl('', [Validators.required]);

  registerData: any;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.registerData = { "firstname": "venu", "lastname": "gandham", "useremail": "venugandham6@gmail.com", "usermobile": "8688941771", "userpassword": "123123", "app": "web", "altermobile": "8688941773", "address": "this is address" };
  }

  confirm(data) {
    let sendData = Object.assign({}, data);
    var token = this.appService.getToken();
    this.appService.url = "signup";
    this.appService.postService(token, sendData).subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error)
    });
  }

}



