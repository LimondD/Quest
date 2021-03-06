"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EmailValidatorDirective_1;
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
const emailPattern = RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
let EmailValidatorDirective = EmailValidatorDirective_1 = class EmailValidatorDirective {
    validate(control) {
        if (!emailPattern.test(control.value)) {
            return { 'notValidEmail': true };
        }
        return null;
    }
};
__decorate([
    core_1.Input()
], EmailValidatorDirective.prototype, "confirmEqualValidator", void 0);
EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[emailValidator]',
        providers: [{
                provide: forms_1.NG_VALIDATORS,
                useExisting: EmailValidatorDirective_1,
                multi: true
            }]
    })
], EmailValidatorDirective);
exports.EmailValidatorDirective = EmailValidatorDirective;
//# sourceMappingURL=email-validator.directive.js.map