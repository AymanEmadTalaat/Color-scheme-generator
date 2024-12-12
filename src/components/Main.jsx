import "../styles/Main.css";

function Main({ colorValue }) {
  const styles = {
    backgroundColor: colorValue,
  };

  return (
    <>
      <div style={styles}></div>
    </>
  );
}

export default Main;
