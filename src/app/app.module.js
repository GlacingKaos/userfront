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
var user_service_1 = require('./providers/user/user.service');
var auth_guard_service_1 = require('./guard/auth_guard.service');
var app_routing_module_1 = require('./routes/app-routing.module');
var auth_service_1 = require('./providers/auth/auth.service');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./components/app/app.component');
var index_1 = require('./components/index');
var angular2_jwt_1 = require('angular2-jwt');
var http_1 = require('@angular/http');
var core_2 = require("angular2-logger/core"); // ADD THIS
var angular2_jwt_2 = require('angular2-jwt');
var interceptor_service_1 = require('./providers/interceptor/interceptor.service');
var ng2_pagination_1 = require('ng2-pagination');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng2_pagination_1.Ng2PaginationModule
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.components
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                { provide: http_1.XHRBackend, useClass: interceptor_service_1.InterceptorXHRBackend },
                angular2_jwt_1.AUTH_PROVIDERS,
                auth_service_1.Auth,
                auth_guard_service_1.AuthGuard,
                core_2.Logger,
                user_service_1.UserService,
                angular2_jwt_2.provideAuth({
                    tokenGetter: function () {
                        return localStorage.getItem('id_token');
                    }
                }),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map