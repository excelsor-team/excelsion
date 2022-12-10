"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadEmail = void 0;
const excelsion_1 = require("../excelsion");
class BadEmail extends excelsion_1.Excelsion {
    constructor(...excelsiors) {
        super(excelsion_1.ExcelsionType.NOT_FOUND, 'Email contains errors', excelsiors);
    }
}
exports.BadEmail = BadEmail;
