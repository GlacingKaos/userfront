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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_1 = require('../../classes/user');
var auth_service_1 = require('../../providers/auth/auth.service');
var angular2_jwt_1 = require('angular2-jwt');
var LoginComponent = (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.formSubmit = false;
        this.formMsg = "";
        this.model = new user_1.User();
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.formSubmit = true;
        this.formMsg = '';
        this.auth.login(this.model).then(function (res) {
            localStorage.setItem("id_token", res['token']);
            _this.router.navigate(['/profile']);
        }, function (err) {
            _this.formSubmit = false;
            _this.formMsg = "El usuario no se ha podido identificar";
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.html',
            styleUrls: ['login.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.Auth])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map