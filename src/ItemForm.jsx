import { useState } from "react";

function ItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    onAddItem(inputValue);

    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter purchase"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default ItemForm;