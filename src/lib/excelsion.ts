import { ExcelsionKeys, excelsionMessage, ExcelsionType, ExcelsionTypes } from "./types";

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
      type: ExcelsionType[this.type as ExcelsionKeys],
      reasons: this.format(this.because),
      metadata: this.metadataObject,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toObject())
  }

}

