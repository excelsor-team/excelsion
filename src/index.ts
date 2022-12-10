
import { Excelsion, ExcelsionTypes } from "./excelsion";

class UserCreationException extends Excelsion {
    type = ExcelsionTypes.BAD_FORMAT;
    // type = 'any';
}
class EmailException extends Excelsion { }
class EmailBadFormatException extends Excelsion { };
class PasswordException extends Excelsion { };
class PasswordLengthException extends Excelsion { };
class PasswordMismatchException extends Excelsion { };

const x = new UserCreationException();

throw x.toObject();
