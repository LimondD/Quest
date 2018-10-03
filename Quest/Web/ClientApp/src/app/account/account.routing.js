"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_form_component_1 = require("./login-form/login-form.component");
//export const routing: ModuleWithProviders = RouterModule.forRoot([
//  { path: 'register', component: RegistrationFormComponent},
//  { path: 'login', component: LoginFormComponent}
//]);
var appRoutes = [
    { path: 'login', component: login_form_component_1.LoginFormComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=account.routing.js.map