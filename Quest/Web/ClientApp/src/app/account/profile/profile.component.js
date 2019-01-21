"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const UserModel_1 = require("../UserModel");
let ProfileComponent = class ProfileComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new UserModel_1.UserModel();
        userService.getUser().subscribe(result => {
            this.user = result;
        }, error => console.error(error));
    }
    ngOnInit() {
    }
    save() {
        alert('Сохранение');
        //return this.userService.create(this.user)
        //  .subscribe(result => {
        //    this.router.navigate(['/login']);
        //  },
        //    error => console.log(error)
        //  );
    }
    ;
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map