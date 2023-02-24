import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Fetch.css";

function Fetch() {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPost] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://rest-api-jet.vercel.app/users");

      setUser(res.data);
    })();

    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch((err) => err);

      setUsers(res);
    })();

    (async () => {
      const res = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();
      setPost(res);
    })();
  }, []);

  return (
    <>
      <button onClick={() => setShow(!show)}>Show Pop-up</button>

      {show && (
        <div className="overlay2" onClick={() => setShow(false)}>
          <div className="model2">
            <h2>Pop-up View</h2>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}

      <div>
        {user &&
          user.slice(0, 2).map((user) => (
            <div key={user._id}>
              <h2>{user.name}</h2>
            </div>
          ))}
      </div>

      <div>
        {users &&
          users.slice(0, 1).map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
          ))}
      </div>

      <div>
        {posts &&
          posts.slice(6, 7).map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
            </div>
          ))}
      </div>
    </>
  );
}

export default Fetch;
