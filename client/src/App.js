import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [light, setLight] = useState(false);

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
    <div className="App">
      <div className={light ? "light" : "dark"}>
        <label htmlFor="theme">
          <input
            type="checkbox"
            //  onChange={handleOnChange}
            onChange={() => setLight(!light)}
          />
          Theme
        </label>
      </div>
      <div className={`App ${light ? "light" : "dark"}`}>Hello</div>
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
  );
}

export default App;
