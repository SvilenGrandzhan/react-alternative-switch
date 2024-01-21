export default function Section({ selectedValue, onSetValue }) {
  const handleChange = (e) => {
    let heroClass;
    switch (e.target.value) {
      case "Tank":
        heroClass = "Fighter";
        break;
      case "Striker":
        heroClass = "Rogue";
        break;
      case "Healer":
        heroClass = "Cleric";
        break;
      case "Blaster":
        heroClass = "Sorcerer";
        break;
      case "Controller":
        heroClass = "Wizard";
        break;
      default:
        heroClass = "Choose class";
        break;
    }
    onSetValue(heroClass);
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
