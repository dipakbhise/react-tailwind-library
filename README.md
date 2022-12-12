# react-tailwind-library

## Setup Tailwind CSS
Using official Tailwind Docs
https://tailwindcss.com/docs/installation

## Install
Using npm:

```shell
npm install react-tailwind-library
```

or using yarn:

```shell
yarn add react-tailwind-library
```

## Add CSS in your Root Directory 
 > In ReactJs add this in `index.js` file : <br/>
 
 > In NextJs add this in `_app.js` file :
```css
import '../node_modules/react-tailwind-library/dist/style.css';
```

## Usage
> We can use it in React and Next JS projects

```js
import React, { useState } from "react";
import { Combobox } from "react-tailwind-library";

// const data = ["hi", "hello", "hey", "hi", "hello", "hey"];
const data = [
  { name: "test1" },
  { name: "est1" },
  { name: "wert" },
  { name: "trey" },
  { name: "hgi" },
];
let inputProps = {
  onInput: () => {
    console.log("on input");
  },
};
function App() {
  const [value, setvalue] = useState([{ name: "test1" }]);
  return (
    <div className="App">
      <Combobox
        options={data}
        title={"combobox"}
        value={value}
        setvalue={setvalue}
        inputProps={inputProps}
        multiselect={true}
        textField={"name"}
      />
    </div>
  );
}

export default App;

// if multiselect `true` pass value as an array.
```

## Props

Common props you may want to specify include:

- `inputProps` - Object containing on input events, attributes etc.(Object)
- `multiselect` - allow the user to select multiple values.(Boolean)
- `options` - specify the options the user can select from.(Array)
- `title` - label for the combobox.(String)
- `textField` - if options are array of objects then the `key` for options and value to display.(String)
- `value` - control the current value.(String/Object)
- `setvalue` - Function to set selcted value.(Function)



