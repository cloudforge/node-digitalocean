"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
function createHTTPClient(token, options) {
    return axios_1.default.create({
        baseURL: (options === null || options === void 0 ? void 0 : options.baseURL) ? options.baseURL : 'https://api.digitalocean.com/v2/',
        headers: {
            'authorization': "Bearer ".concat(token),
            'content_type': 'application/json'
        }
    });
}
exports.default = createHTTPClient;
