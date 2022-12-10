export class Excelsion extends Error {
  protected originExceptionName: any;
  protected because: Excelsion[];
  protected metadataObject: object;
  type: string = 'aaa'
  constructor(...args: Excelsion[]) {

    super();
    this.originExceptionName = this.constructor.name;
    this.because = args;
    this.metadataObject = {};
    //this.message = this.generateMessage();
    console.log('🧙‍♂️this.constructor.name', this.type)
  }

  private generateMessage() {
    /* if (this.message)
      return this.message

    if (this.type)
      return excelsionMessageType[this.type]

    return excelsionMessageType[ExcelsionType.DEFAULT] */
  }
  private format(because: Excelsion[]): Array<object> {
    if (!because?.length)
      return [];

    return because.map(el => el.toObject());

  }

  private setMetadata(metadata: Object) {
    this.metadataObject = { ...metadata, ...this.metadataObject };
  }

  public metadata(data: object) {

    this.metadataObject = { ...this.metadataObject, ...data };
    this.because?.forEach(el => el.setMetadata(data))

    return this;
  }

  public toObject() {
    return {
      originException: this.originExceptionName,
      message: this.message,
      //type: this.type,
      reasons: this.format(this.because),
      metadata: this.metadataObject,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toObject())
  }

}

export enum ExcelsionType {
  DEFAULT = 'DEFAULT',
  NOT_FOUND = 'NOT_FOUND',
  BAD_PARAMETERS = 'BAD_PARAMETERS',
  BAD_FORMAT = 'BAD_FORMAT',
  UNKNOWN = 'UNKNOWN'
}

const excelsionMessageType = {
  DEFAULT: 'Default Exception',
  NOT_FOUND: 'Not found Exception',
  BAD_PARAMETERS: 'Bad Parameters Exception',
  BAD_FORMAT: 'Bad Format Exception',
  UNKNOWN: 'Unknown Exception'
}