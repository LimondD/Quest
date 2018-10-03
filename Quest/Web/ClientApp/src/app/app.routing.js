"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const counter_component_1 = require("./counter/counter.component");
const fetch_data_component_1 = require("./fetch-data/fetch-data.component");
const login_form_component_1 = require("./account/login-form/login-form.component");
const appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'counter', component: counter_component_1.CounterComponent },
    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
    { path: 'login', component: login_form_component_1.LoginFormComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map