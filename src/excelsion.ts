export class Excelsion extends Error {
  protected originExceptionName: any;
  protected type: ExcelsionType | string = ExcelsionType.DEFAULT;
  protected because: Excelsion[];
  protected metadataObject: object;

  constructor(...args: Excelsion[]) {

    super(ExcelsionType.DEFAULT);

    this.originExceptionName = this.constructor.name;
    this.because = args;
    this.metadataObject = {};

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
      type: this.type,
      reasons: this.format(this.because),
      metadata: this.metadataObject,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toObject())
  }

}

export enum ExcelsionType {
  DEFAULT = 'default-error',
  NOT_FOUND = 'not-found',
  BAD_PARAMETERS = 'bad-parameters',
  BAD_FORMAT = 'bad-format',
  UNKNOWN = 'unknown'
}

export enum ExcelsionMessage {
  DEFAULT = 'Default Excelsion error',
  NOT_FOUND = 'Not Found',
  BAD_PARAMETERS = 'Bad Parameters',
  BAD_FORMAT = 'Bad Format',
  UNKNOWN = 'Unknown'
}
