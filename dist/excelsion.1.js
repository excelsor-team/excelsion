"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelsionType = exports.Excelsion = void 0;
class Excelsion extends Error {
    constructor(...args) {
        if (!args.length || args.every(el => el instanceof Excelsion)) {
            super(ExcelsionType.DEFAULT);
            this.type = ExcelsionType.DEFAULT;
            this.originException = this.constructor.name;
            this.message = ExcelsionType.DEFAULT;
            this.because = args;
        }
        else {
            const [type, message, excelsiors] = args;
            super(message);
            this.type = type !== null && type !== void 0 ? type : ExcelsionType.DEFAULT;
            this.originException = this.constructor.name;
            this.message = message !== null && message !== void 0 ? message : ExcelsionType.DEFAULT;
            this.because = excelsiors !== null && excelsiors !== void 0 ? excelsiors : [];
        }
    }
    format(excelsions) {
        return excelsions;
        return excelsions.map(el => el.toString());
    }
    metadata(data) {
    }
    toObject() {
        return {
            type: this.type,
            originException: this.originException,
            message: this.message,
            because: this.format(this.because)
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
})(ExcelsionType = exports.ExcelsionType || (exports.ExcelsionType = {}));
