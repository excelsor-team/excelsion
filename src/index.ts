
import { Excelsion, ExcelsionType } from "./excelsion";

class UserCreationException extends Excelsion {
    type = ExcelsionType.BAD_PARAMETERS
}
class EmailException extends Excelsion { }
class EmailBadFormatException extends Excelsion { };
class PasswordException extends Excelsion { };
class PasswordLengthException extends Excelsion { };
class PasswordMismatchException extends Excelsion { };

throw new UserCreationException(


).toObject();