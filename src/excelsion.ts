export class Excelsion extends Error {
  protected originExceptionName: any;
  protected because: Excelsion[];
  protected metadataObject: object;
  protected type: ExcelsionKeys | string = ExcelsionTypes.DEFAULT;

  constructor(...args: Excelsion[]) {
    super();

    this.originExceptionName = this.constructor.name;
    this.because = args;
    this.metadataObject = {};
  }

  private generateMessage() {
    if (this.message) {
      return this.message;
    }

    const tmpMessage = excelsionMessage[this.type as ExcelsionKeys];
    
    return tmpMessage || excelsionMessage[ExcelsionTypes.DEFAULT as ExcelsionKeys];
  }

  private format(because: Excelsion[]): Array<object> {
    if (!because?.length) {
      return [];
    }

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
      message: this.generateMessage(),
      type: this.type,
      reasons: this.format(this.because),
      metadata: this.metadataObject,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toObject())
  }

}

type ExcelsionKeys =
    'DEFAULT'
  | 'NOT_FOUND'
  | 'BAD_PARAMETERS'
  | 'BAD_FORMAT'
  | 'UNKNOWN'
;

type TExcelsionKeys = {
  [key in ExcelsionKeys]: string
};

export const ExcelsionTypes : TExcelsionKeys = {
  DEFAULT: 'DEFAULT',
  NOT_FOUND : 'NOT_FOUND',
  BAD_PARAMETERS : 'BAD_PARAMETERS',
  BAD_FORMAT : 'BAD_FORMAT',
  UNKNOWN : 'UNKNOWN',
};

const ExcelsionType : TExcelsionKeys = {
  DEFAULT : 'default',
  NOT_FOUND : 'not-found',
  BAD_PARAMETERS : 'bad-parameters',
  BAD_FORMAT : 'bad-format',
  UNKNOWN : 'unknown',
}

const excelsionMessage : TExcelsionKeys = {
  DEFAULT : 'Default Exception',
  NOT_FOUND : 'Not found Exception',
  BAD_PARAMETERS : 'Bad Parameters Exception',
  BAD_FORMAT : 'Bad Format Exception',
  UNKNOWN : 'Unknown Exception',
}
