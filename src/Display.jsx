export default function Display({ displayedValue }) {
  return <div>{displayedValue ? `Recommended DnD class: ${displayedValue}` : null}</div>;
}
