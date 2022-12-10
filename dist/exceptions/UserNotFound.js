"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameException = exports.FormException = exports.EmailHasNoAtException = exports.EmailHasNoDomainException = exports.InvalidEmailException = exports.InvalidFieldException = exports.UserNotFoundException = void 0;
const excelsion_1 = require("../excelsion");
class UserNotFoundException extends excelsion_1.Excelsion {
}
exports.UserNotFoundException = UserNotFoundException;
class InvalidFieldException extends excelsion_1.Excelsion {
    constructor() {
        super(...arguments);
        this.type = excelsion_1.ExcelsionType.NOT_FOUND;
        this.message = 'Field $field with value $value is not correct';
    }
}
exports.InvalidFieldException = InvalidFieldException;
class InvalidEmailException extends excelsion_1.Excelsion {
}
exports.InvalidEmailException = InvalidEmailException;
class EmailHasNoDomainException extends excelsion_1.Excelsion {
}
exports.EmailHasNoDomainException = EmailHasNoDomainException;
class EmailHasNoAtException extends excelsion_1.Excelsion {
}
exports.EmailHasNoAtException = EmailHasNoAtException;
class FormException extends excelsion_1.Excelsion {
}
exports.FormException = FormException;
class NameException extends excelsion_1.Excelsion {
}
exports.NameException = NameException;
