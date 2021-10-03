## Parse to React

A tool to convert JSX strings into React Components

### Installation:

```
yarn add parse-to-react
//or 
npm install parse-to-react
```

### Usage:

```javascript
import parseToReact from 'parse-to-react'
let s = `<div className="text-2xl font-black">hi</div>`
...
return (
  <div>
    {parseToReact(s)}
  </div>
)
```
