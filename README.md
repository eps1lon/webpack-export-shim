# webpack-export-shim

We are a component library that has a peer dependency on React.
We currently have a function that has a better implementation in React 18.
We'd like to be compatible with React 17 and 18 while offering the improved implementation to React 18 users.
However, Webpack currently warns if we try to access an import (React 18) using React 17 (`yarn start:webpack`).
This is disruptive to our library consumers since we don't use the new function unconditionally but rather guarded in

```js
import * as React from "react";
if (React.useId !== undefined) {
  // do something with React.useId
}
```

This behavior seems to be perfectly fine if we're using a browser with ES modules support (`yarn start:browser`).
Behavior is also fine in Node.js (`yarn start:node`)
