"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var Authentication = /** @class */ (function () {
    function Authentication(config) {
        this.config = config;
    }
    Authentication.prototype.login = function (user) {
        var token = jsonwebtoken_1.default.sign(__assign({}, user), this.config.secretKey, { expiresIn: this.config.expiresIn });
        return token;
    };
    Authentication.prototype.verify = function (token) {
        try {
            jsonwebtoken_1.default.verify(token, this.config.secretKey);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    return Authentication;
}());
exports.Authentication = Authentication;
