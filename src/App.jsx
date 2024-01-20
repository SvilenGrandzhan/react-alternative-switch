import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("Tank");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select
        value={value}
        onChange={handleChange}
      >
        <option value="Tank">Tank</option>
        <option value="Striker">Striker</option>
        <option value="Healer">Healer</option>
        <option value="Blaster">Blaster</option>
        <option value="Controller">Controller</option>
      </select>
      <p>{`You selected ${value}`}</p>
    </div>
  );
}
