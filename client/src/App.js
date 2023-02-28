import React, { useState } from "react";
import "./App.css";
import AutoText from "./Components/AutoText/AutoText";
import Dropdown from "./Components/Dropdown/Dropdown";
import Fetch from "./Components/Fetch/Fetch";
import Form from "./Components/Form/Form";
import Model from "./Components/Model/Model";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [light, setLight] = useState(false);
  const [show, setShow] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!name || !password) {
      document.getElementById("nameErr").innerText = "Please fill the userName";
      document.getElementById("passErr").innerText = "Please fill the Password";
    }
    console.log(name, password);
  };

  // const handleOnChange = () => {
  //   setLight(!light);
  // };

  return (
    <>
      <div className="App">
        <div className={light ? "light" : "dark"}>
          <input id="theme" type="checkbox" onChange={() => setLight(!light)} />
          <label htmlFor="theme">Theme</label>
        </div>

        <AutoText />

        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <span id="nameErr"></span>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span id="passErr"></span>
          <button>submit</button>
        </form>
      </div>

      <Dropdown />

      <button onClick={() => setShow(!show)}>Open Model</button>

      <Model show={show} close={() => setShow(!show)} />

      <Fetch />

      <Form />

      <Pagination />
    </>
  );
}

export default App;
