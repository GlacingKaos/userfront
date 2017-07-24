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
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var user_service_1 = require('../../../providers/user/user.service');
var core_1 = require('@angular/core');
var UserListComponent = (function () {
    function UserListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.msg = '';
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users['users'];
        }, function (error) {
            if (error instanceof angular2_jwt_1.AuthHttpError) {
                _this.router.navigate(['/']);
            }
        });
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (res) {
            _this.msg = "El usuario se ha eliminado correctamente";
            setTimeout(function () {
                _this.msg = "";
                _this.getUsers();
            }, 2000);
        }, function (error) {
            _this.msg = "Ha ocurrido un error eliminando el usuario";
        });
    };
    UserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-list',
            templateUrl: 'user_list.html',
            styles: ["\n        th{\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user_list.component.js.map