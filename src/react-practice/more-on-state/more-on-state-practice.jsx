/*eslint-disable*/
import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "McTavish",
    age: 10,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  function handleFirstName(e) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastName(e) {
    setPerson({ ...person, lastName: e.target.value });
  }

  let fullName = person.firstName + " " + person.lastName;

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <label>
        {" "}
        First Name:
        <input type="text" onChange={handleFirstName} />
      </label>
      <label>
        Last Name:
        <input type="text" onChange={handleLastName} />
      </label>
      <br></br>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

/*
Update the Person component we’ve been using above.

    Add two separate input fields for the first name and the last name. Either of these should be able to update the full name in the h1 element with every keystroke.
 */
