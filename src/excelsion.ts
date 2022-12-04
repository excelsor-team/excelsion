export class Excelsion extends Error {
  type: ExcelsionType
  originException: any
  message: string
  because: Excelsion[]

  constructor(type: ExcelsionType, errorMessage: string, excelsions: Excelsion[]) {
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

  public toString(): string {

    return JSON.stringify({
      type: this.type,
      originException: this.originException,
      message: this.message,
      because: this.format(this.because)
    })
  }

}

export enum ExcelsionType {
  NOT_FOUND = 'Not Found'
}
