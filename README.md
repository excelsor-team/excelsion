# @excelsor/excelsion

The goal of this package is to enable you to create, throw and handle your exceptions in a useful and easy way.

This package has 0 dependencies on purpose and will continue so.

---

## Installation

```
  $ npm install @excelsor/excelsion
```

---

## Usage

Option 1: Create your basic exception extending Excelsion:

```typescript
import { Excelsion } from "@excelsor/excelsion";

export class UserCreationException extends Excelsion {}
```

Option 2: Create your custom exception defining the message and/or the type. The package provides the ExcelsionTypes enum, which is supported by @excelsor/excelsion-\* packages, but you can use whatever you want.

```typescript
import { Excelsion, ExcelsionTypes } from "@excelsor/excelsion";

export class MyFormException extends Excelsion {
  type = ExcelsionTypes.BAD_PARAMETERS; // optional
  message = "My form exception"; // optional
}
```

Once you have your exceptions you can pass them in a nested way.

```typescript
throw new MyFormException(
  new MyFieldException(
    new InvalidFieldException(/* ... child exceptions */).metadata({
      key: "value",
    })
    /* ... sibling exceptions */
  )
).metadata({ field: "email", value: "invalid@email" }); // optional
```

The result of the above code, gives you a structured object:

```json
  {
    "originException": "MyFormException",
    "message": "My form exception",
    "type": "bad-parameters",
    "reasons": [
      {
        "originException": "MyFieldException",
        "message": "Default exception",
        "type": "default-exception",
        "reasons": [
          {
            "originException": "InvalidFieldException",
            "message": "Default exception",
            "type": "default-exception",
            "reasons": [],
            "metadata": {
              ...inherited metadata +
              ...specific metadata
            }
          }
        ],
        "metadata": {
          ...inherited metadata
        }
      },
    ],
    "metadata": {
      ...specific metadata
    }
  }
```

> **_NOTE_** - Metadata is passed to immediate nested exceptions and joined with the specific metadata of each exception.

---
<br />

## Complex example

<br />

```typescript
import { Excelsion, ExcelsionType } from "@excelsor/excelsion";

// Exceptions extending Excelsion
class UserCreationException extends Excelsion {
  type = ExcelsionTypes.BAD_PARAMETERS;
  message = 'User has invalid fields';
}
class EmailException extends Excelsion { }
class EmailBadFormatException extends Excelsion {
  type = ExcelsionType.BAD_FORMAT;
};
class PasswordException extends Excelsion { };
class PasswordLengthException extends Excelsion { };
class PasswordMismatchException extends Excelsion {
  type = 'mismatch';
};

throw new UserCreationException(
  new EmailException(
    new EmailBadFormatException().metadata({})
  ).metadata({}),
  new PasswordException(
    new PasswordLengthException().metadata({ length: 4 }),
    new PasswordMismatchException().metadata({})
  ).metadata({ password: '1234' })
).metadata({ email: 'john.doe@mail.invalid.com' })
.toObject();
```

### Result

```
{
  "originException": "UserCreationException",
  "message": "User has invalid fields",
  "type": "bad-parameters",
  "reasons": [
    {
      "originException": "EmailException",
      "message": "Default Exception",
      "type": "default",
      "reasons": [
        {
          "originException": "EmailBadFormatException",
          "message": "Default Exception",
          "type": "bad-format",
          "reasons": [],
          "metadata": {}
        }
      ],
      "metadata": { "email": "john.doe@mail.invalid.com" }
    },
    {
      "originException": "PasswordException",
      "message": "Default Exception",
      "type": "default",
      "reasons": [
        {
          "originException": "PasswordLengthException",
          "message": "Default Exception",
          "type": "default",
          "reasons": [],
          "metadata": { "password": "1234", "length": 4 }
        },
        {
          "originException": "PasswordMismatchException",
          "message": "Default Exception",
          "type": "mismatch",
          "reasons": [],
          "metadata": { "password": "1234" }
        }
      ],
      "metadata": { "email": "john.doe@mail.invalid.com", "password": "1234" }
    }
  ],
  "metadata": { "email": "john.doe@mail.invalid.com" }
}
```

## Roadmap

- Handling the structured object (aka output object) with a handler provided by @excelsor team in a new package

- Enable passing normal new Error() exceptions

- Provide a real usage example based on dynamically filled exception arrays

- Replacing keys in message with metadata matching values

<br /> <br />

<p style='text-align: right;'> Made with ❤️ in Barcelona by <a href ="https://github.com/orgs/excelsor-team/people" target="_blank">@Excelsor team</a></p>
