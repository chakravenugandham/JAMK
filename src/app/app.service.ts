import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from 'src/Common/Services/common.service';
//import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string;
  headers: any;
  host = 'http://broadenblue.com/projects/jamk/api/';
  data: any = { 'success': '', error: '' };
  public token: {};
  constructor(private _http: HttpClient, private commonService: CommonService) { }
  setToken(token) {
    this.token = token;
  }
  postService(token, data) {
    var headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'Bearer ' + token);
    return this._http.post(this.host + this.url, data, { headers: headers })
    //.pipe(map(res => res, err => err.json()));
  }
  getService(token) {
    var headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'Bearer ' + token);
    return this._http.get(this.host + this.url, { headers: headers })
    //.pipe(map(res => res));
  }
  putService(token, data) {
    var headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'Bearer ' + token);
    return this._http.put(this.host + this.url, data, { headers: headers })
    //.pipe(map(res => res));
  }

  deleteService(token, data) {
    var headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'Bearer ' + token);
    //   data = { "id": "9c3f083f-34c5-444d-a9a7-26c4b3f36fc6", "leaveTypeCode": "CO", "from": 1512649604444, "to": 1512649600000, "employeeId": 1219 }
    return this._http.delete(this.host + this.url, { headers: headers })
    //.pipe(map(res => res));
  }

  getToken() {
    var tokenDetails: any = this.commonService.getItem('tokenDetails');
    this.token = tokenDetails && tokenDetails['access_token'];
    return this.token;
  }
}
