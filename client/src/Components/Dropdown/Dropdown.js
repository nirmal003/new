import React, { useEffect, useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

function Dropdown() {
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [index]);
  return (
    <div>
      <select>
        {countries.map((item, i) => (
          <option value={item.name} onClick={() => setIndex(i)}>
            {item.name}
          </option>
        ))}
      </select>
      <select>
        {countries[index].cities.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
