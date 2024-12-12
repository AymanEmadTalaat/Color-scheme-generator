import "../styles/Header.css";

function Header({ handleForm, color, colorScheme, handleSubmit }) {
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
