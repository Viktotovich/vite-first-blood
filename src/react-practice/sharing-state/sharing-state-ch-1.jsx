/*eslint-disable */
import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="wrapper">
        <Input label="First input" onType={handleChange} text={text} />
        <Input label="Second input" onType={handleChange} text={text} />
      </div>
    </>
  );
}

function Input({ label, text, onType }) {
  return (
    <label>
      {label} <input value={text} onChange={onType} />
    </label>
  );
}
