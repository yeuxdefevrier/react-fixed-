import InfoList from "./InfoList";
import LinkList from "./LinkList";

function App() {
  const info = ["React", "JavaScript", "CSS"];

  const links = [
    { id: 1, name: "Google", url: "https://google.com" },
    { id: 2, name: "React", url: "https://react.dev" },
  ];

  return (
    <div>
      <h1>Info List</h1>
      <InfoList array={info} />

      <h1>Link List</h1>
      <LinkList list={links} />
    </div>
  );
}

export default App;

import usercard from "./usercard";

function app() {
  return (
    <div>
      <usercard
        name="lia"
        list={["react", "javascript", "css"]}
      />
    </div>
  );
}

export default app;
