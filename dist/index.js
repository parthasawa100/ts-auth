"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class Authentication {
    constructor(config) {
        this.config = config;
    }
    login(user) {
        if (!user.email) {
            throw new Error('Email is required for authentication');
        }
        const token = jsonwebtoken_1.sign({ ...user }, this.config.secretKey, { expiresIn: this.config.expiresIn });
        return token;
    }
    verify(token) {
        try {
            jsonwebtoken_1.verify(token, this.config.secretKey);
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.Authentication = Authentication;
