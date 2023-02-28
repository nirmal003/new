import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pagination.css";

function Pagination() {
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      //   console.log([...Array(10)].fill(0));
      //   console.log(new Array(10).fill(0));
    })();
  }, []);

  const pageHandler = (page) => {
    if (page >= 1 && page <= posts.length / 10) setPage(page);
  };

  return (
    <>
      <div>
        {posts.slice(page * 10 - 10, page * 10).map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <div className="pagination">
        <span
          className={page > 1 ? "" : "disable"}
          onClick={() => pageHandler(page - 1)}
        >
          ◀️
        </span>
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className={page == i + 1 ? "selected" : ""}
            onClick={() => pageHandler(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span
          className={page < posts.length / 10 ? "" : "disable"}
          onClick={() => pageHandler(page + 1)}
        >
          ▶️
        </span>
      </div>
    </>
  );
}

export default Pagination;
