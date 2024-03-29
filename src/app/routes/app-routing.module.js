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
var paginated_component_1 = require('../components/user/paginated/paginated.component');
var user_root_component_1 = require('./../components/user/root/user-root.component');
var user_edit_component_1 = require('./../components/user/edit/user_edit.component');
var user_add_component_1 = require('./../components/user/add/user_add.component');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var profile_component_1 = require('../components/profile/profile.component');
var auth_guard_service_1 = require('./../guard/auth_guard.service');
var user_list_component_1 = require('./../components/user/list/user_list.component');
var signup_component_1 = require('../components/signup/signup.component');
var login_component_1 = require('./../components/login/login.component');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    {
                        path: 'login',
                        component: login_component_1.LoginComponent
                    },
                    {
                        path: 'signup',
                        component: signup_component_1.SignupComponent
                    },
                    {
                        path: 'users',
                        component: user_root_component_1.UserRootComponent,
                        canActivate: [auth_guard_service_1.AuthGuard],
                        canActivateChild: [auth_guard_service_1.AuthGuard],
                        children: [
                            {
                                path: '',
                                component: user_list_component_1.UserListComponent
                            },
                            {
                                path: 'paginated',
                                component: paginated_component_1.PaginatedComponent
                            },
                            {
                                path: 'add',
                                component: user_add_component_1.UserAddComponent
                            },
                            {
                                path: 'edit/:id',
                                component: user_edit_component_1.UserEditComponent
                            }
                        ]
                    },
                    {
                        path: 'profile',
                        component: profile_component_1.ProfileComponent,
                        canActivate: [auth_guard_service_1.AuthGuard],
                    },
                    {
                        path: '',
                        component: login_component_1.LoginComponent
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map