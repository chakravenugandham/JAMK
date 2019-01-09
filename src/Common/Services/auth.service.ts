import { Injectable } from '@angular/core';/* 
import { Http, URLSearchParams } from '@angular/http';
//import { AppConfig } from '../../config/app.config';
import { HttpService } from './http.service';
import { CommonService } from './common.service';
import { AppConstants } from '../../config/app.constants';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'; */
@Injectable()
export class AuthService {/* 
    public url = "register";
    private isLogged: boolean = false;
    private userDetails: any;
    private tokenDetails: any;
    private currentUserInfo: any;
    private myspacenxApiUrl: string;
    constructor(private _http: Http, private appConfig: AppConfig, private httpService: HttpService, public commonService: CommonService, private appConstants: AppConstants, private router: Router) {
     // this.myspacenxApiUrl = this.appConstants.getConstants().myspacenxApiUrl;
    };
    redirectUrl: string;
    isLoggedIn(): boolean {
        this.userDetails = this.commonService.getItem('currentUser');
        this.tokenDetails = this.commonService.getItem('tokenDetails');
        this.currentUserInfo = this.commonService.getItem('currentUserInfo');
        return (this.userDetails && this.currentUserInfo && this.userDetails.isLogged && this.tokenDetails) ? true : false;
    };
    login = (username: string, password: string) => {
        let data = new URLSearchParams();
        data.append('username', ((username)? username : ''));
        data.append('password', ((password)? password : ''));
        data.append('grant_type', 'password');
        var header = { 'Content-Type': 'application/x-www-form-urlencoded' };
        return this.httpService.send(this.myspacenxApiUrl + '/api/oauth/token', 'post', data, header).map(response => response.json());
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    getUserDetails() {
        var tokenDetails = this.commonService.getItem('tokenDetails'),
            authorizationToken = 'Bearer ' + (tokenDetails && tokenDetails['access_token']);
        var self = this, header = { 'Content-Type': 'application/json', 'Authorization': authorizationToken };
        return this.httpService.send(this.myspacenxApiUrl + '/api/core/user/me', 'get', null, header).map(response => response.json());
    }
    getAppInfo() {
        var tokenDetails = this.commonService.getItem('tokenDetails'),
            authorizationToken = 'Bearer ' + (tokenDetails && tokenDetails['access_token']);
        var self = this, header = { 'Content-Type': 'application/json', 'Authorization': authorizationToken };
        return this.httpService.send(this.myspacenxApiUrl + '/api/core/applicationInfo', 'get', null, header).map(response => response.json());
    } */
}