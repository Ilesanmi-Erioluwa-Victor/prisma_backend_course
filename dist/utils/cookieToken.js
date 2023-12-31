"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieToken = void 0;
const getJwtToken_1 = require("../helpers/getJwtToken");
const http_status_codes_1 = require("http-status-codes");
const cookieToken = (user, res) => {
    const token = (0, getJwtToken_1.getJwtToken)(user.id);
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    user.password = undefined;
    res.status(http_status_codes_1.StatusCodes.OK).cookie('userToken', token, options).json({
        success: true,
        token,
    });
};
exports.cookieToken = cookieToken;
