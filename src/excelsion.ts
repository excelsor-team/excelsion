export class Excelsion extends Error {
  originExceptionName: any;
  type: ExcelsionType | string = ExcelsionType.DEFAULT;
  // message: string;
  because: Excelsion[] = [];

  constructor(...args: any[]) {
    let message: string = ExcelsionType.DEFAULT;

    let argsAreExcelsions = true;
    args?.forEach((item, index) => {
      if (!index && typeof item === 'string') {
        argsAreExcelsions = false;
      }
    });

    super(message);

    this.originExceptionName = this.constructor.name;

    // this.type = type;
    
    if (argsAreExcelsions) {
      this.because = args as Excelsion[];
    } else {
      this.message = args[0] as string;
      this.because = args.slice(1) as Excelsion[];
    }
  }

  private format(): any {
      if (this.because.length) {
      return this.because.map(el => el.toObject());
      // return this.because.map(el => ({ originExceptionName: el.originExceptionName, because: el.format() }));
    } else {
      return [];
    }
  }

  private stringifyBecause(): any {
    let string: string = `${this.originExceptionName}`;

    string += this.because.map((item => ` because ${item.stringifyBecause()}`)).join('');

    return string;
  }

  public metadata(data: object): void {

  }

  public toObject() {
    return {
      originException: this.originExceptionName,
      message: this.message,
      type: this.type,
      reasons: this.format(),
      semanticReasons : this.stringifyBecause(),
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
