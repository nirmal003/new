import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
    if (!name || !password) {
      document.getElementById("nameErr").innerText = "Please fill the userName";
      document.getElementById("passErr").innerText = "Please fill the Password";
    }
    console.log(name, password);
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          onChange={handleOnChange}
        />
        <span id="nameErr"></span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
        />
        <span id="passErr"></span>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
