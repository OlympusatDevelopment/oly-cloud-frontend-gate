#### Usage
To add the Authentication gate and the Centralizer to your project:
1. Include the oly-sdk & react-oly-gate package
2. Import the Gate & instantiate it with your branding info and credentials

```
npm i -S @olympusat/oly-client-sdk oly-client-gate
```


```
  import {Oly} from '@olympusat/oly-client-sdk';
  import {Gate} from '@olympusat/oly-client-gate';

  import getOlySdkOptions from "./olySdkOptions";
  import getOlyGateOptions from "./olyGateOptions";

  new Oly(getOlySdkOptions());
  new Gate(getOlyGateOptions());
```