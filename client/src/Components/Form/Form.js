import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({});

  const getData = (e) => {
    const { name, value } = e.target;
    const input = { [name]: value };
    setUser({ ...user, ...input });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="firstName" onChange={getData} />
        <input type="text" name="lastName" onChange={getData} />
        <input type="password" name="password" onChange={getData} />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default Form;
