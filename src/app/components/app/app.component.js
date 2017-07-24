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
var angular2_jwt_1 = require('angular2-jwt');
var router_1 = require('@angular/router');
var auth_service_1 = require('./../../providers/auth/auth.service');
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.currentUrl = '/';
        router.events.forEach(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.currentUrl = event.url;
            }
        });
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <nav [hidden]=\"!auth.loggedIn()\">\n            <div>\n            <a href=\"#\" class=\"brand-logo left\">Angular 2 App</a>\n            <ul class=\"right\">\n                <li [ngClass]=\"{'active': currentUrl == '/profile'}\"><a routerLink=\"/profile\">Profile</a></li>\n                <li [ngClass]=\"{'active': currentUrl == '/users'}\"><a routerLink=\"/users\">Users section</a></li>\n                <li [ngClass]=\"{'active': currentUrl == '/users/paginated'}\"><a routerLink=\"/users/paginated\">Users paginated</a></li>\n                <li><a (click)=\"logout()\">Logout</a></li>\n            </ul>\n            </div>\n        </nav>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map