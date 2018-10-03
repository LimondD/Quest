"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const registration_form_component_1 = require("./registration-form/registration-form.component");
const login_form_component_1 = require("./login-form/login-form.component");
const accauntRoutes = [
    { path: 'login', component: login_form_component_1.LoginFormComponent },
    { path: 'registration', component: registration_form_component_1.RegistrationFormComponent }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(accauntRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AccountRoutingModule);
exports.AccountRoutingModule = AccountRoutingModule;
//# sourceMappingURL=account.routing.js.map