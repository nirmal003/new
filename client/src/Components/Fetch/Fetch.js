import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch() {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://rest-api-jet.vercel.app/users");

      setUser(res.data);
    })();

    (async () => {
      const res = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();

      setUsers(res);
    })();
  }, []);

  return (
    <>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <h2>Pop-up View</h2>}
      <div>
        {user &&
          user.map((user) => (
            <div key={user._id}>
              <h1>{user.name}</h1>
            </div>
          ))}
      </div>
      <div>
        {users &&
          users.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default Fetch;
