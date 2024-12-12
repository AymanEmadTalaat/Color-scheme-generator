import "../styles/Header.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Toggle from "./Toggle.jsx";

function Header({ handleForm, color, colorScheme, handleSubmit, handleClick }) {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      color: "#2b283a",
      padding: "12px",
      boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.10)",
      fontSize: 12,
    },
  }));

  return (
    <header>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="color"
          onChange={handleForm}
          name="color"
          value={color}
          aria-live="polite"
        />

        <LightTooltip title="Color mode" placement="bottom">
          <select
            onChange={handleForm}
            name="colorScheme"
            value={colorScheme}
            aria-label={`Color mode is${colorScheme}`}
          >
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome-dark</option>
            <option value="monochrome-light">Monochrome-light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic-complement</option>
            <option value="triad">Triad</option>
            <option value="quad">Quad</option>
          </select>
        </LightTooltip>

        <Toggle handleClick={handleClick} />

        <button
          onClick={handleSubmit}
          type="submit"
          aria-label="Generate color scheme button"
        >
          Get color scheme
        </button>
      </form>
    </header>
  );
}

export default Header;
