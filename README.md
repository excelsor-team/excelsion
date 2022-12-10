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

> **_NOTE_** - Metadata is passed in all nested exceptions and joined with the specific metadata of each exception.

---

## Examples

### Implementation

```

```

### Result

```

```

## Roadmap

> **_NOTE_** - In the near future, you'll be able to handle the structured object (aka output object) with a handler provided by @excelsor team in a new package.

> **_NOTE_** - In the near future, you'll be able to use the package passing normal new Error() exceptions.

<br /> <br />

<p style='text-align: right;'> Made with ❤️ in Barcelona by <a href ="https://github.com/orgs/excelsor-team/people" target="_blank">@Excelsor team</a></p>
