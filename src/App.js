import { useState } from "react";
import { Button, Combobox } from "./lib";

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
  const [value, setvalue] = useState([{ name: "test1" },]);
  return (
    <div className="App">
      <Button text={"hii"} />

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
