import { EmailHasNoDomainException, InvalidEmailException, UserNotFoundException, EmailHasNoAtException, FormException, NameException, InvalidFieldException } from "./exceptions/UserNotFound";

// throw new UserNotFound(
//     new UserNotFound(),
//     new BadEmail()
// ).toString()

try {
    throw new InvalidFieldException(
    )
} catch (err: any) {
    console.log(err.toObject());
}

