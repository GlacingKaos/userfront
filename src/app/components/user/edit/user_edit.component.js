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
var user_service_1 = require('./../../../providers/user/user.service');
var user_1 = require('./../../../classes/user');
var core_1 = require('@angular/core');
var UserEditComponent = (function () {
    function UserEditComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.user = new user_1.User();
        this.formSubmit = false;
        this.formMsg = "";
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserEditComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.userService.getUser(id).subscribe(function (user) {
            _this.user = user['user'];
        }, function (error) {
            if (error instanceof angular2_jwt_1.AuthHttpError) {
                _this.router.navigate(['/']);
            }
        });
    };
    UserEditComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.userService.updateUser(user).subscribe(function (res) {
            _this.formMsg = "Usuario actualizado";
        }, function (error) {
            _this.formMsg = "Error actualizando";
        });
    };
    UserEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-edit',
            templateUrl: 'user_edit.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user_edit.component.js.map