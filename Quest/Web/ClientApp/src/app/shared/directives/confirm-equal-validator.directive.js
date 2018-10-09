"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfirmEqualValidatorDirective_1;
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
let ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = class ConfirmEqualValidatorDirective {
    validate(control) {
        const controlToCompare = control.parent.get(this.confirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
};
__decorate([
    core_1.Input()
], ConfirmEqualValidatorDirective.prototype, "confirmEqualValidator", void 0);
ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[confirmEqualValidator]',
        providers: [{
                provide: forms_1.NG_VALIDATORS,
                useExisting: ConfirmEqualValidatorDirective_1,
                multi: true
            }]
    })
], ConfirmEqualValidatorDirective);
exports.ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective;
//# sourceMappingURL=confirm-equal-validator.directive.js.map