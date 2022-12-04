export class Excelsion extends Error {
  originExceptionName: any;
  type: ExcelsionType
  because: Excelsion[]

  constructor(...args: Excelsion[] | Array<any>) {

    if (!args.length || args.every(el => el instanceof Excelsion)) {
      super(ExcelsionType.DEFAULT);

      this.type = ExcelsionType.DEFAULT;
      this.originExceptionName = this.constructor.name;
      this.message = ExcelsionType.DEFAULT;
      this.because = args
    } else {
      const [type, message, excelsiors] = args;
      super(message);

      this.type = type ?? ExcelsionType.DEFAULT;
      this.originExceptionName = this.constructor.name;
      this.message = message ?? ExcelsionType.DEFAULT;
      this.because = excelsiors ?? []
    }

  }

  private format(): any {
    if (this.because.length) {
      return this.because.map(el => el.toObject());
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
