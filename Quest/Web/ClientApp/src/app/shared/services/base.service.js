"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx_1 = require("rxjs/Rx");
class BaseService {
    constructor() { }
    handleError(error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return Rx_1.Observable.throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Rx_1.Observable.throw(modelStateErrors || 'Server error');
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map