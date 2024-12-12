import "../styles/Toggle.css";

function Toggle({ handleClick }) {
  return (
    <span
      onClick={handleClick}
      className="material-symbols-outlined toggle-theme"
    >
      nightlight
    </span>
  );
}

export default Toggle;
