import { EmailHasNoDomainException, InvalidEmailException, UserNotFoundException, EmailHasNoAtException} from "./exceptions/UserNotFound";

// throw new UserNotFound(
//     new UserNotFound(),
//     new BadEmail()
// ).toString()

try {
    throw new UserNotFoundException(
        new InvalidEmailException(),
        new EmailHasNoDomainException(
            new EmailHasNoAtException()
        ),
    );
} catch (err: any) {
    console.log(err.toString());
    // console.log(err.toObject());
}

