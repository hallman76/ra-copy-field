This package extends a few of react-admin's built-in fields to include a little copy icon that makes it easy to copy the field's value.

![demo](https://github.com/hallman76/ra-copy-field/assets/492090/8f48a0e0-f414-4022-b7f6-c67628886a77)


# Sample Usage

Instead of importing Fields from `react-admin`, import them from `ra-copy-field`

```jsx
import React, {useState} from 'react'

// import { 
//     TextField
// } from 'react-admin'

import { 
    TextField
} from 'ra-copy-field'

```

# Installation

This package isn't published on npm. To install directly from github:

```sh
npm i git+https://github.com/hallman76/ra-copy-field.git
# OR 
yarn add git+https://github.com/hallman76/ra-copy-field.git
```


# Supported Fields

This package supports the following react-admin fields:

```jsx
import { 
    DateField,
    EmailField,
    ImageField,
    DateField,
    TextField, 
    UrlField,
} from 'ra-copy-field'

```
