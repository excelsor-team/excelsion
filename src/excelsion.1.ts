import { InvalidEmailException } from "./exceptions/UserNotFound";

export class Excelsion extends Error {
  type: ExcelsionType
  originException: any
  message: string
  because: Excelsion[]

  constructor(...args: Excelsion[] | Array<any>) {


    if (!args.length || args.every(el => el instanceof Excelsion)) {
      super(ExcelsionType.DEFAULT);
      this.type = ExcelsionType.DEFAULT;
      this.originException = this.constructor.name;
      this.message = ExcelsionType.DEFAULT;
      this.because = args
    } else {
      const [type, message, excelsiors] = args;
      super(message);

      this.type = type ?? ExcelsionType.DEFAULT;
      this.originException = this.constructor.name;
      this.message = message ?? ExcelsionType.DEFAULT;
      this.because = excelsiors ?? []
    }

  }

  private format(excelsions: Excelsion[]) {
    return excelsions
    return excelsions.map(el => el.toString())
  }

  public metadata(data: object): void {

  }

  public toObject() {
    return {
      type: this.type,
      originException: this.originException,
      message: this.message,
      because: this.format(this.because)
    };
  }

  public toString(): string {
    return JSON.stringify(this.toObject())
  }

}

export enum ExcelsionType {
  DEFAULT = 'Default Excelsion error',
  NOT_FOUND = 'Not Found',
}
