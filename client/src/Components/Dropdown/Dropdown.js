import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

function Dropdown() {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div>
      <select onChange={(e) => setIndex(e.target.value)}>
        {countries.map((item, i) => (
          <option key={i} value={i}>
            {item.name}
          </option>
        ))}
      </select>
      <select>
        {countries[index].cities.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
