import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserRegistration } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';

import {BaseService} from "./base.service";

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; 

// Add the RxJS Observable operators we need in this app.
//import '../../rxjs-operators';

@Injectable()

export class UserService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

    register(email: string, password: string, firstName: string, lastName: string,location: string): Observable<UserRegistration> {
      let body = JSON.stringify({ email, password, firstName, lastName,location });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + "/accounts", body, options)
          .map(res => res.json())
        .catch(this.handleError);
    }

  create(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.baseUrl + "/Account/CreateUser", body, options)
      //.map(res => res.json())
      .catch(this.handleError);
  }

  save(userDto) {
    let body = JSON.stringify(userDto);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    })
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.baseUrl + "/User/SaveUser", body, options)
      //.map(res => res.json())
      .catch(this.handleError);
  }

  getUser() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    })
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + '/User/GetUser', options)
      .map(res => res.json());
  }

   login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.baseUrl + '/Account/login',
      JSON.stringify({ email, password }),{ headers }
      )
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('auth_token', res.token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

