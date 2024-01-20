import { useState } from "react";
import Section from "./Section";
import Display from "./Display";

export default function App() {
  const [value, setValue] = useState("Tank");

  return (
    <div>
      <Section onSetValue={setValue} />
      <Display displayedValue={value} />
    </div>
  );
}
