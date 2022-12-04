import { Excelsion, ExcelsionType } from "../excelsion";

export class UserNotFound extends Excelsion {

    constructor(...excelsiors: Excelsion[]) {
        super(ExcelsionType.NOT_FOUND, 'User not found', excelsiors);
    }
}