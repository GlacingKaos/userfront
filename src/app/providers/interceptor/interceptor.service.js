"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var InterceptorXHRBackend = (function (_super) {
    __extends(InterceptorXHRBackend, _super);
    function InterceptorXHRBackend() {
        _super.apply(this, arguments);
    }
    InterceptorXHRBackend.prototype.createConnection = function (request) {
        var connection = _super.prototype.createConnection.call(this, request);
        connection.response = connection.response.do(this.processResponse);
        return connection;
    };
    InterceptorXHRBackend.prototype.processResponse = function (res) {
        var Authorization = res.headers.get("Authorization");
        if (Authorization) {
            var token = Authorization.split(" ");
            localStorage.setItem("id_token", token[1]);
        }
        return Rx_1.Observable.of(res);
    };
    return InterceptorXHRBackend;
}(http_1.XHRBackend));
exports.InterceptorXHRBackend = InterceptorXHRBackend;
//# sourceMappingURL=interceptor.service.js.map