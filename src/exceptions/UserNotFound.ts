import { Excelsion, ExcelsionType } from "../excelsion";

export class UserNotFoundException extends Excelsion {

    constructor(...excelsiors: Excelsion[]) {
        super(ExcelsionType.NOT_FOUND, 'User not found22', excelsiors);
    }
}

export class InvalidEmailException extends Excelsion { }

export class EmailHasNoDomainException extends Excelsion {}

export class EmailHasNoAtException extends Excelsion {}
