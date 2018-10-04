"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const http_2 = require("@angular/http");
let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        let headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            })
        };
        http.get(baseUrl + 'api/SampleData/WeatherForecasts', httpOptions).subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent = __decorate([
    core_1.Component({
        selector: 'app-fetch-data',
        templateUrl: './fetch-data.component.html'
    }),
    __param(1, core_1.Inject('BASE_URL'))
], FetchDataComponent);
exports.FetchDataComponent = FetchDataComponent;
//# sourceMappingURL=fetch-data.component.js.map