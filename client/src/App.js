import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Components/Dropdown/Dropdown";
import Fetch from "./Components/Fetch/Fetch";
import Form from "./Components/Form/Form";
import Model from "./Components/Model/Model";

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

  function text() {
    let data = "Here we learning JavaScript ";
    let index = 0;
    setInterval(() => {
      document.getElementById("text").innerText = data.slice(0, index);
      index++;
      if (index > data.length - 1) index = 0;
    }, 150);
    return data;
  }
  let res = text();

  return (
    <>
      <div className="App">
        <div className={light ? "light" : "dark"}>
          <input id="theme" type="checkbox" onChange={() => setLight(!light)} />
          <label htmlFor="theme">Theme</label>
        </div>
        <div id="text" className={`App ${light ? "light" : "dark"}`}>
          {res}
        </div>
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
    </>
  );
}

export default App;
