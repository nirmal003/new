import React from "react";

function AutoText() {
  function text() {
    let data = "Here we will learning JavaScript ";
    let index = 0;
    return setInterval(() => {
      document.getElementById("text").innerText = data.slice(0, index);
      index++;
      if (index > data.length - 1) index = 0;
    }, 160);
  }

  let res = text();

  return (
    <div id="text" className="App dark">
      {res}
    </div>
  );
}

export default React.memo(AutoText);
