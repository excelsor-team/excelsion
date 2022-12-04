import { EmailHasNoDomainException, InvalidEmailException, UserNotFoundException } from "./exceptions/UserNotFound";

// throw new UserNotFound(
//     new UserNotFound(),
//     new BadEmail()
// ).toString()


throw new UserNotFoundException(
    new InvalidEmailException(
        new EmailHasNoDomainException()
    )
).toObject();
