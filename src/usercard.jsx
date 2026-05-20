import Greeting from "./Greeting";
import InfoList from "./InfoList";

function Usercard({ name, list }) {
  return (
    <div>
      <Greeting name={name} />
      <InfoList array={list} />
    </div>
  );
}

export default Usercard;
