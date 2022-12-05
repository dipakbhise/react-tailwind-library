import { useState } from "react";
import Combobox from "./components/Combobox";
import Button from "./lib/components/Button";

const data = ['hi', 'hello', 'hey', 'hi', 'hello', 'hey'];
// const data = [{name:'test1'}, {name:'est1'}, {name:'wert'}, {name:'trey'}, {name:'hgi'}];
let inputProps = {
  onInput:()=>{console.log("on input")}
}
function App() {
  const [value, setvalue] = useState("");
  return (
    <div className="App">
      <Button text={"hii"} />

      <Combobox options={data}  title={'combobox'} value={value} setvalue={setvalue} inputProps={inputProps} />
    </div>
  );
}

export default App;
