"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var auth_service_1 = require('../../providers/auth/auth.service');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_1 = require('../../classes/user');
var SignupComponent = (function () {
    function SignupComponent(router, api) {
        this.router = router;
        this.api = api;
        this.formSubmit = false;
        this.formMsg = "";
        this.colorMsg = "red";
        this.model = new user_1.User();
    }
    SignupComponent.prototype.register = function () {
        var _this = this;
        this.formSubmit = true;
        this.api.register(this.model).then(function (res) {
            _this.formSubmit = false;
            _this.colorMsg = "green";
            _this.formMsg = res['msg'];
        }, function (err) {
            _this.formSubmit = false;
            _this.colorMsg = "red";
            _this.formMsg = err['msg'];
        });
    };
    SignupComponent.prototype.login = function () {
        this.router.navigate(["/login"]);
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: 'signup.html',
            styleUrls: ['../login/login.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.Auth])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map