export declare class Excelsion extends Error {
    protected originExceptionName: any;
    protected type: ExcelsionType | string;
    protected because: Excelsion[];
    protected metadataObject: object;
    constructor(...args: Excelsion[]);
    private format;
    private setMetadata;
    metadata(data: object): this;
    toObject(): {
        originException: any;
        message: string;
        type: string;
        reasons: object[];
        metadata: object;
    };
    toString(): string;
}
export declare enum ExcelsionType {
    DEFAULT = "Default Excelsion error",
    NOT_FOUND = "Not Found",
    BAD_PARAMETERS = "Bad Parameters",
    BAD_FORMAT = "Bad Format",
    UNKNOWN = "Unknown"
}
