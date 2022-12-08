import { useState } from "react";
import Button from "./lib/components/Button";
import Combobox from "./lib/components/Combobox";

// const data = ["hi", "hello", "hey", "hi", "hello", "hey"];
const data = [{name:'test1'}, {name:'est1'}, {name:'wert'}, {name:'trey'}, {name:'hgi'}];
let inputProps = {
  onInput: () => {
    console.log("on input");
  },
};
function App() {
  const [value, setvalue] = useState('');
  return (
    <div className="App">
      <Button text={"hii"} />

      <Combobox
        options={data}
        title={"combobox"}
        value={value}
        setvalue={setvalue}
        inputProps={inputProps}
        // multiselect={true}
        textField={'name'}
      />

      {/* <Combobox
        options={data}
        title={"combobox"}
        value={value}
        setvalue={setvalue}
        inputProps={inputProps}
        multiselect={true}
        textField={'name'}
      /> */}
    </div>
  );
}

export default App;

// if multiselect `true` pass value as an array.
