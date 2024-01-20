export default function Section({ value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
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
  );
}
