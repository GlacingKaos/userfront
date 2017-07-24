"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var user_list_component_1 = require('./../list/user_list.component');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var user_service_1 = require('../../../providers/user/user.service');
var core_1 = require('@angular/core');
var PaginatedComponent = (function (_super) {
    __extends(PaginatedComponent, _super);
    function PaginatedComponent(userService, router) {
        _super.call(this, userService, router);
        this.userService = userService;
        this.router = router;
        this.page = 1;
    }
    PaginatedComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    PaginatedComponent.prototype.getUsers = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.userService.getUserspaginated(page).subscribe(function (users) {
            _this.page = page;
            _this.users = users['data'];
            _this.total = users['count'];
        }, function (error) {
            if (error instanceof angular2_jwt_1.AuthHttpError) {
                _this.router.navigate(['/']);
            }
        });
    };
    PaginatedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'paginated',
            templateUrl: 'paginated.html',
            styles: ["\n        th{\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], PaginatedComponent);
    return PaginatedComponent;
}(user_list_component_1.UserListComponent));
exports.PaginatedComponent = PaginatedComponent;
//# sourceMappingURL=paginated.component.js.map