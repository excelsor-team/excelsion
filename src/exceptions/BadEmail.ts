import { Excelsion, ExcelsionType } from "../excelsion";

export class BadEmail extends Excelsion {
    constructor(...excelsiors: Excelsion[]) {
        super(ExcelsionType.NOT_FOUND, 'Email contains errors', excelsiors);
    }
}