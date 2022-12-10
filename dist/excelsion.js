"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelsionType = exports.Excelsion = void 0;
class Excelsion extends Error {
    constructor(...args) {
        super(ExcelsionType.DEFAULT);
        this.type = ExcelsionType.DEFAULT;
        this.originExceptionName = this.constructor.name;
        this.because = args;
        this.metadataObject = {};
    }
    format(because) {
        if (!(because === null || because === void 0 ? void 0 : because.length))
            return [];
        return because.map(el => el.toObject());
    }
    setMetadata(metadata) {
        this.metadataObject = Object.assign(Object.assign({}, metadata), this.metadataObject);
    }
    metadata(data) {
        var _a;
        this.metadataObject = Object.assign(Object.assign({}, this.metadataObject), data);
        (_a = this.because) === null || _a === void 0 ? void 0 : _a.forEach(el => el.setMetadata(data));
        return this;
    }
    toObject() {
        return {
            originException: this.originExceptionName,
            message: this.message,
            type: this.type,
            reasons: this.format(this.because),
            metadata: this.metadataObject,
        };
    }
    toString() {
        return JSON.stringify(this.toObject());
    }
}
exports.Excelsion = Excelsion;
var ExcelsionType;
(function (ExcelsionType) {
    ExcelsionType["DEFAULT"] = "Default Excelsion error";
    ExcelsionType["NOT_FOUND"] = "Not Found";
    ExcelsionType["BAD_PARAMETERS"] = "Bad Parameters";
    ExcelsionType["BAD_FORMAT"] = "Bad Format";
    ExcelsionType["UNKNOWN"] = "Unknown";
})(ExcelsionType = exports.ExcelsionType || (exports.ExcelsionType = {}));
