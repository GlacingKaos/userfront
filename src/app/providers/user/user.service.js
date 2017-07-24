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
var Rx_1 = require('rxjs/Rx');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var UserService = (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this._apiUrl = 'http://api.laravel5.local:8888/api/';
        this._headers = new http_1.Headers;
        this._headers.append("Content-type", "application/x-www-form-urlencoded");
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }
    UserService.prototype.getUsers = function () {
        return this.authHttp.get(this._apiUrl + "users")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserspaginated = function (page) {
        return this.authHttp.get(this._apiUrl + "users/paginated/" + page)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp.get(this._apiUrl + "users/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (user) {
        return this.authHttp.post(this._apiUrl + "users", user)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        return this.authHttp.put(this._apiUrl + "users/" + user.id, user)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.authHttp.delete(this._apiUrl + "users/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Rx_1.Observable.throw(error);
    };
    UserService.prototype._parseUser = function (user) {
        return Object.keys(user).map(function (k) { return (encodeURIComponent(k) + "=" + encodeURIComponent(user[k])); }).join('&');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map