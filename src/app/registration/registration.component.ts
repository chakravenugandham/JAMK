import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  mobile = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);
  loginemail = new FormControl('', [Validators.required]);
  loginpassword = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit() {
  }

}
