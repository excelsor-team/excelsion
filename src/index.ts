import { EmailHasNoDomainException, InvalidEmailException, UserNotFoundException } from "./exceptions/UserNotFound";

// throw new UserNotFound(
//     new UserNotFound(),
//     new BadEmail()
// ).toString()


const a = new UserNotFoundException(
    new InvalidEmailException(
        new EmailHasNoDomainException()
    )
).toObject();
console.log(a)
