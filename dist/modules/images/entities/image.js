"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStatus = exports.ImageDistribution = exports.ImageType = void 0;
var ImageType;
(function (ImageType) {
    ImageType["BASE"] = "base";
    ImageType["SNAPSHOT"] = "snapshot";
    ImageType["BACKUP"] = "backup";
    ImageType["CUSTOM"] = "custom";
})(ImageType = exports.ImageType || (exports.ImageType = {}));
var ImageDistribution;
(function (ImageDistribution) {
    ImageDistribution["ArchLinux"] = "Arch Linux";
    ImageDistribution["CentOS"] = "CentOS";
    ImageDistribution["CoreOS"] = "CoreOS";
    ImageDistribution["Debian"] = "Debian";
    ImageDistribution["Fedora"] = "Fedora";
    ImageDistribution["FedoraAtomic"] = "Fedora Atomic";
    ImageDistribution["FreeBSD"] = "FreeBSD";
    ImageDistribution["Gentoo"] = "Gentoo";
    ImageDistribution["openSUSE"] = "openSUSE";
    ImageDistribution["RancherOS"] = "RancherOS";
    ImageDistribution["Ubuntu"] = "Ubuntu";
    ImageDistribution["Unknown"] = "Unknown";
})(ImageDistribution = exports.ImageDistribution || (exports.ImageDistribution = {}));
var ImageStatus;
(function (ImageStatus) {
    ImageStatus["NEW"] = "new";
    ImageStatus["AVAILABLE"] = "available";
    ImageStatus["PENDING"] = "pending";
    ImageStatus["DELETED"] = "deleted";
    ImageStatus["RETIRED"] = "retired";
})(ImageStatus = exports.ImageStatus || (exports.ImageStatus = {}));
