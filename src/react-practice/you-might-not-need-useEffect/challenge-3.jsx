/*eslint-disable*/
import { useState } from "react";

export default function EditContact({ savedContact, onSave }) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);
  const [oldContact, setOldContact] = useState(savedContact);

  function setDetails() {
    setName(savedContact.name);
    setEmail(savedContact.email);
    setOldContact(savedContact);
  }

  //Since the savedContact only gets changed upon submission, this is a safe function that is not going to cause unecessary re-renders
  (() => {
    if (
      savedContact.name !== oldContact.name ||
      savedContact.email !== oldContact.email
    ) {
      setDetails();
    }
  })();

  return (
    <section>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          const updatedData = {
            id: savedContact.id,
            name: name,
            email: email,
          };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(savedContact.name);
          setEmail(savedContact.email);
        }}
      >
        Reset
      </button>
    </section>
  );
}
