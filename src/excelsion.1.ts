export class Excelsion extends Error {
  type: ExcelsionType
  originException: any
  message: string
  because: Excelsion[]

  constructor(...type: any[] | ExcelsionType = ExcelsionType.DEFAULT, errorMessage: string = ExcelsionType.DEFAULT, excelsions: Excelsion[] = []) {
    super(errorMessage);

    this.type = type;
    this.originException = this.constructor.name;
    this.message = errorMessage;
    this.because = excelsions
  }

  private format(excelsions: Excelsion[]) {
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
