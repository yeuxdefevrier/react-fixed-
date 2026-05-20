import InfoList from "./InfoList";

function App() {
  const info = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>Info List</h1>

      <InfoList array={info} />
    </div>
  );
}

export default App;
