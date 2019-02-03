"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const base_service_1 = require("./base.service");
const rxjs_1 = require("rxjs");
// Add the RxJS Observable operators we need in this app.
//import '../../rxjs-operators';
let UserService = class UserService extends base_service_1.BaseService {
    constructor(http, configService) {
        super();
        this.http = http;
        this.configService = configService;
        this.baseUrl = '';
        // Observable navItem source
        this._authNavStatusSource = new rxjs_1.BehaviorSubject(false);
        // Observable navItem stream
        this.authNavStatus$ = this._authNavStatusSource.asObservable();
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        this._authNavStatusSource.next(this.loggedIn);
        this.baseUrl = configService.getApiURI();
    }
    register(email, password, firstName, lastName, location) {
        let body = JSON.stringify({ email, password, firstName, lastName, location });
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/accounts", body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    create(user) {
        let body = JSON.stringify(user);
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.baseUrl + "/Account/CreateUser", body, options)
            //.map(res => res.json())
            .catch(this.handleError);
    }
    save(userDto) {
        let body = JSON.stringify(userDto);
        let headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.baseUrl + "/User/SaveUser", body, options)
            //.map(res => res.json())
            .catch(this.handleError);
    }
    getUser() {
        let headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + '/User/GetUser', options)
            .map(res => res.json());
    }
    login(email, password) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/Account/login', JSON.stringify({ email, password }), { headers })
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
};
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map