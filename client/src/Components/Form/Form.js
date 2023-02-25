import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    language: [],
  });

  const getData = (e) => {
    const { name, value, checked } = e.target;

    if (name === "language") {
      const copy = { ...user };

      if (checked) {
        copy.language.push(value);
      } else {
        copy.language = copy.language.filter((val) => val !== value);
      }

      setUser(copy);
    } else {
      const input = { [name]: value };

      setUser({ ...user, ...input });
    }
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
        <select name="occupation" onChange={getData}>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          onChange={getData}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          onChange={getData}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          onChange={getData}
        />
        <label htmlFor="other">Other</label>
        <input
          id="html"
          type="checkbox"
          name="language"
          value="html"
          onChange={getData}
        />
        <label htmlFor="html">HTML</label>
        <input
          id="css"
          type="checkbox"
          name="language"
          value="css"
          onChange={getData}
        />
        <label htmlFor="css">CSS</label>
        <input
          id="javascript"
          type="checkbox"
          name="language"
          value="javascript"
          onChange={getData}
        />
        <label htmlFor="javascript">JavaScript</label>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default Form;
