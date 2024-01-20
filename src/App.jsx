import { useState } from "react";
import Section from "./Section";

export default function App() {
  const [value, setValue] = useState("Tank");

  return (
    <div>
      <Section setValue={setValue} />
      <p>{`You selected ${value}`}</p>
    </div>
  );
}
