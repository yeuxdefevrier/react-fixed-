import Greeting from "./greeting";
import InfoList from "./infolist";

function usercard({ name, list }) {
  return (
    <div>
      <Greeting name={name} />
      <InfoList array={list} />
    </div>
  );
}

export default usercard;
