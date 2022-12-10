import { Excelsion, ExcelsionType } from "../excelsion";

export class UserNotFoundException extends Excelsion {


}
export class InvalidFieldException extends Excelsion {
    protected type = ExcelsionType.NOT_FOUND;
    message = 'Field $field with value $value is not correct'
}

export class InvalidEmailException extends Excelsion { }

export class EmailHasNoDomainException extends Excelsion { }

export class EmailHasNoAtException extends Excelsion { }

export class FormException extends Excelsion { }

export class NameException extends Excelsion { }

