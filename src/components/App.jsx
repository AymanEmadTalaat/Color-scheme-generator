import "../styles/App.css";
import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [formData, setForm] = useState({
    color: "#F55A5A",
    colorScheme: "monochrome",
  });
  const [colorsArr, setColorsArr] = useState([
    "#F55A5A",
    "#2B283A",
    "#FBF3AB",
    "#AAD1B6",
    "#A626D3",
  ]);

  useEffect(() => {
    handleSubmit;
  }),
    [];

  function handleSubmit() {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${formData.color
        .split("#")
        .join("")}&format=JSON&mode=${formData.colorScheme}&count=5`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((d) => {
        const data = d;

        setColorsArr([
          data.colors[0].hex.value,
          data.colors[1].hex.value,
          data.colors[2].hex.value,
          data.colors[3].hex.value,
          data.colors[4].hex.value,
        ]);
      });

    console.log(colorsArr);
  }

  function handleForm(e) {
    const { value, name } = e.target;

    setForm({
      ...formData,
      [name]: value,
    });
  }

  const mainEls = colorsArr.map((clr) => <Main key={clr} colorValue={clr} />);
  const footerEls = colorsArr.map((clr) => (
    <Footer key={clr} colorValue={clr} />
  ));

  return (
    <div className={`container ${theme}`}>
      <Header
        handleForm={handleForm}
        color={formData.color}
        colorScheme={formData.colorScheme}
        handleSubmit={handleSubmit}
        handleClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <main>{mainEls}</main>

      <footer>{footerEls}</footer>
    </div>
  );
}

export default App;
