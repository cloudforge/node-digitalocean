"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var regionSlugs = [
    "nyc1",
    "sfo1",
    "nyc2",
    "ams2",
    "sgp1",
    "lon1",
    "nyc3",
    "ams3",
    "fra1",
    "tor1",
    "sfo2",
    "blr1",
    "sfo3"
];
var VPC = /** @class */ (function () {
    function VPC(http) {
        this.http = http;
        this.basePath = 'vpcs';
    }
    VPC.prototype.getAll = function (options) {
        return this.http.get(this.basePath, {
            params: {
                per_page: (options === null || options === void 0 ? void 0 : options.pageSize) ? options.pageSize : 10,
                page: (options === null || options === void 0 ? void 0 : options.page) ? options.page : 10
            }
        }).then(function (response) { return response.data; });
    };
    VPC.prototype.create = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if ((0, lodash_isempty_1.default)(options.name.trim())) {
                reject(new Error("'name' is required"));
            }
            if (!regionSlugs.includes(options.region)) {
                reject(new Error("'region' is required and should be one of ".concat(regionSlugs)));
            }
            return _this.http.post(_this.basePath, {
                name: options.name,
                description: options.description || "",
                region: options.region,
                ip_range: options.ip_range || ""
            }).then(function (response) { return resolve(response.data); })
                .catch(reject);
        });
    };
    VPC.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if ((0, lodash_isempty_1.default)(id.trim())) {
                reject(new Error("'id' is required"));
            }
            return _this.http.get("".concat(_this.basePath, "/").concat(id))
                .then(function (response) { return resolve(response.data); })
                .catch(reject);
        });
    };
    VPC.prototype.deleteById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if ((0, lodash_isempty_1.default)(id.trim())) {
                reject(new Error("'id' is required"));
            }
            return _this.http.delete("".concat(_this.basePath, "/").concat(id))
                .then(function (response) { return resolve(response.data); })
                .catch(reject);
        });
    };
    return VPC;
}());
exports.default = VPC;
