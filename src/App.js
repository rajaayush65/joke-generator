import { useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Meow");
  const [lastName, setLastName] = useState("Meow");

  const joke = useRandomJoke(firstName, lastName);

  //Custom Hook
  //const joke = useRandomJoke("Aayush", "Raj");

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div>
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <form>
          <input placeholder="First Name" ref={firstNameRef} />
          <input placeholder="Last Name" ref={lastNameRef} />
        </form>
        <button onClick={generateJoke}>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
