# startInterval

Without `startInterval`:

```javascript
setInterval(myFunction, 1000);
myFunction();
```

With `startInterval`:

```javascript
import startInterval from "startinterval";
startInterval(myFunction, 1000);
```

This package was built for [a tutorial](https://evanhahn.com/publishing-a-simple-package-to-npm/).
