import React from "react";

function AutoText() {
  let index = 0;
  let data = "Here we learning JavaScript ";
  function text() {
    setInterval(() => {
      document.getElementById("text").innerText = data.slice(0, index);
      index++;
      if (index > data.length - 1) index = 0;
    }, 160);
    return data;
  }

  let res = text();

  return (
    <div id="text" className="App dark">
      {res}
    </div>
  );
}

export default React.memo(AutoText);
