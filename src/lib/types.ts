export type ExcelsionKeys =
    'DEFAULT'
    | 'NOT_FOUND'
    | 'BAD_PARAMETERS'
    | 'BAD_FORMAT'
    | 'UNKNOWN'
    ;

type TExcelsionKeys = {
    [key in ExcelsionKeys]: string
};

export const ExcelsionTypes: TExcelsionKeys = {
    DEFAULT: 'DEFAULT',
    NOT_FOUND: 'NOT_FOUND',
    BAD_PARAMETERS: 'BAD_PARAMETERS',
    BAD_FORMAT: 'BAD_FORMAT',
    UNKNOWN: 'UNKNOWN',
};

export const ExcelsionType: TExcelsionKeys = {
    DEFAULT: 'default',
    NOT_FOUND: 'not-found',
    BAD_PARAMETERS: 'bad-parameters',
    BAD_FORMAT: 'bad-format',
    UNKNOWN: 'unknown',
}

export const excelsionMessage: TExcelsionKeys = {
    DEFAULT: 'Default Exception',
    NOT_FOUND: 'Not found Exception',
    BAD_PARAMETERS: 'Bad Parameters Exception',
    BAD_FORMAT: 'Bad Format Exception',
    UNKNOWN: 'Unknown Exception',
}
