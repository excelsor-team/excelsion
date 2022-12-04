export class Excelsion extends Error {
  type: ExcelsionType | string;
  originException: any;
  message: string;
  because: Excelsion[];

  constructor(...args: Excelsion[] | string[]) {

    let errorMessage = ExcelsionType.DEFAULT;

    args?.forEach((item, index) => {
      if (!index && typeof item === 'string') {
        errorMessage = item;
      } else {
        this.because.push(item);
      }
    })

    if (args?.[0]) {

    }
    super(errorMessage);

    this.type = type;
    this.originException = this.constructor.name;
    this.message = errorMessage;
    this.because = excelsions
  }

  // constructor() {

  // }

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
