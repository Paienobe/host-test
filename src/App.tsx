import "./App.css";

function App() {
  const hostname = window.location.hostname;
  console.log(hostname);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: hostname == "localhost" ? "red" : "pink",
        }}
      ></div>
    </>
  );
}

export default App;
