import "./App.css";
import Button from "./day3/Button";
import { Cricket } from "./day3/Cricket";
import { DynamicRendering } from "./day3/DynamicRendering";
import { Goku } from "./day3/Goku";
function App() {
  return (
    <div className="space-x-10 my-8">
      <Button color="green" >Green Button</Button>
      <Button color="red">Red Button</Button>
      <Button color="yellow">Yellow Button</Button>
      <Button color="blue">Blue Button</Button>
      <br></br>
      <DynamicRendering></DynamicRendering>
      <Cricket></Cricket>
      <Goku></Goku>
    </div>
  );
}

export default App;