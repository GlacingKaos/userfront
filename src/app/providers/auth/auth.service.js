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
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var Auth = (function () {
    function Auth(_http, authHttp) {
        this._http = _http;
        this.authHttp = authHttp;
        this._apiUrl = 'http://api.laravel5.local:8888/api/';
        this._headers = new http_1.Headers;
        this._headers.append("Content-type", "application/x-www-form-urlencoded");
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }
    Auth.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this._apiUrl + "login", _this._parseUser(user), {
                headers: _this._headers
            }).subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    Auth.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this._apiUrl + "signup", _this._parseUser(user), {
                headers: _this._headers
            }).subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    Auth.prototype._parseUser = function (user) {
        return Object.keys(user).map(function (k) { return (encodeURIComponent(k) + "=" + encodeURIComponent(user[k])); }).join('&');
    };
    Auth.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map