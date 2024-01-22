import { SWITCH_MAP } from "./switchMap";

export default function Section({ selectedValue, onSetValue }) {
  const handleChange = (e) => {
    onSetValue(SWITCH_MAP[e.target.value]);
  };

  return (
    <div style={{ display: "flex" }}>
      <p>Preferred DnD role: </p>
      <select
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Choose</option>
        <option value="Tank">Tank</option>
        <option value="Striker">Striker</option>
        <option value="Healer">Healer</option>
        <option value="Blaster">Blaster</option>
        <option value="Controller">Controller</option>
      </select>
    </div>
  );
}