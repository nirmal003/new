import axios from "axios";
import React, { useState } from "react";
import "./App.css";
// import AutoText from "./Components/AutoText/AutoText";
// import DownloadFile from "./Components/DownloadFile/DownloadFile";
// import Demo from "./Components/Demo/Demo";
// import Dropdown from "./Components/Dropdown/Dropdown";
// import Fetch from "./Components/Fetch/Fetch";
// import Form from "./Components/Form/Form";
// import Model from "./Components/Model/Model";
// import Pagination from "./Components/Pagination/Pagination";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setImage] = useState(null);
  const [data, setData] = useState(null);

  // const [light, setLight] = useState(false);
  // const [show, setShow] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, file);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", file);

    const result = await axios.post(
      "http://localhost:4000/api/v1/register",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log(result.data);
    setData(result.data);

    // if (!name || !password) {
    //   document.getElementById("nameErr").innerText = "Please fill the userName";
    //   document.getElementById("passErr").innerText = "Please fill the Password";
    // }
    // console.log(name, password);
  };

  // const handleOnChange = () => {
  //   setLight(!light);
  // };

  // const haldleOnChange = async (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setImage(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  return (
    <>
      <div className="App">
        {/* <div className={light ? "light" : "dark"}>
          <input id="theme" type="checkbox" onChange={() => setLight(!light)} />
          <label htmlFor="theme">Theme</label>
        </div> */}

        {/* <AutoText />

        <DownloadFile /> */}

        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <span id="nameErr"></span> */}
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="file"
            placeholder="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* <span id="passErr"></span> */}
          <input type="submit" value="Register" />
        </form>
      </div>
      {/*
      <Dropdown />

      <button onClick={() => setShow(!show)}>Open Model</button>

      <Model show={show} close={() => setShow(!show)} />

      <Fetch />

      <Form />

      <Pagination /> */}

      {/* <a href="mailto:nirmalraj1025@gmail.com">email</a> */}

      {/* <Demo /> */}

      {data && (
        <>
          <img src={`${data.user.avatar.url}`} alt="loading" />
        </>
      )}
    </>
  );
}

export default App;
