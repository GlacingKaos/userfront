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
var PreloaderComponent = (function () {
    function PreloaderComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PreloaderComponent.prototype, "formSubmit", void 0);
    PreloaderComponent = __decorate([
        core_1.Component({
            selector: 'preloader',
            template: "\n  <!-- PRE-LOADER -->\n  <div class=\"center\" [hidden]=\"!formSubmit\">\n      <div class=\"preloader-wrapper big active\" style=\"margin-top: 35%\">\n          <div class=\"spinner-layer spinner-blue\">\n              <div class=\"circle-clipper left\">\n                  <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                  <div class=\"circle\"></div>\n              </div>\n          </div>\n          <div class=\"circle-clipper right\">\n              <div class=\"circle\"></div>\n          </div>\n      </div>\n  </div>\n  <!--/ PRE-LOADER -->\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PreloaderComponent);
    return PreloaderComponent;
}());
exports.PreloaderComponent = PreloaderComponent;
//# sourceMappingURL=preloader.component.js.map