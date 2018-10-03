"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//import { RootComponent } from './root/root.component';
//import { HomeComponent } from './home/home.component';
//import { SettingsComponent } from './settings/settings.component';
var auth_guard_1 = require("../../auth.guard");
var profile_component_1 = require("./profile.component");
exports.routing = router_1.RouterModule.forChild([
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: '', component: profile_component_1.ProfileComponent },
        ]
    }
]);
//# sourceMappingURL=profile.routing.js.map