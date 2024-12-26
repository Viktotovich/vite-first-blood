import { useState } from "react";

export default function Form() {
  let [firstName, setFNLetter] = useState("");
  let [lastName, setLNLetter] = useState("");

  function handleFirstNameChange(e) {
    setFNLetter(e.target.value);
  }

  function handleLastNameChange(e) {
    setLNLetter(e.target.value);
  }

  function handleReset() {
    setFNLetter("");
    setLNLetter("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
