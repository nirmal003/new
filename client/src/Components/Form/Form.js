import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    language: [],
    address: {},
  });

  const [address, setAddress] = useState({});

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
    } else if (name.slice(0, 7) === "address") {
      const add = { [name]: value };

      setAddress({ ...address, ...add });
      console.log(address);
    } else {
      const input = { [name]: value };

      setUser({ ...user, ...input });
    }
    console.log(user, address);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    user.address = { ...address };
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="firstName" onChange={getData} />
        <input type="text" name="lastName" onChange={getData} />
        <input type="password" name="password" onChange={getData} />
        <input type="text" name="address1" onChange={getData} />
        <input type="text" name="address2" onChange={getData} />
        <input type="text" name="address3" onChange={getData} />
        <select name="occupation" onChange={getData}>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          onChange={getData}
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          onChange={getData}
        />
        <label htmlFor="female">Female</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          onChange={getData}
        />
        <label htmlFor="other">Other</label>
        <br />
        <input
          id="html"
          type="checkbox"
          name="language"
          value="html"
          onChange={getData}
        />
        <label htmlFor="html">HTML</label>
        <br />
        <input
          id="css"
          type="checkbox"
          name="language"
          value="css"
          onChange={getData}
        />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          id="javascript"
          type="checkbox"
          name="language"
          value="javascript"
          onChange={getData}
        />
        <label htmlFor="javascript">JavaScript</label>
        <br />
        <button type="submit">Submit</button>
        <br />
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default Form;
