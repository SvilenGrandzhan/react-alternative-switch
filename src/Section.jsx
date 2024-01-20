export default function Section({ selectedValue, onSetValue }) {
  const handleChange = (e) => {
    switch (e.target.value) {
      case "Tank":
        onSetValue("Fighter");
        break;
      case "Striker":
        onSetValue("Rogue");
        break;
      case "Healer":
        onSetValue("Cleric");
        break;
      case "Blaster":
        onSetValue("Sorcerer");
        break;
      case "Controller":
        onSetValue("Wizard");
        break;
      default:
        onSetValue("Choose class");
        break;
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <p>Preferred DnD role: </p>
      <select
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="Tank">Tank</option>
        <option value="Striker">Striker</option>
        <option value="Healer">Healer</option>
        <option value="Blaster">Blaster</option>
        <option value="Controller">Controller</option>
      </select>
    </div>
  );
}
