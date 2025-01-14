import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { contextt } from "./Components/Context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>prop drilling</h1>
      <contextt.Provider value={count}>
        <Count setCount={setCount} />
      </contextt.Provider>
      {/* <Button setCount={setCount} /> */}
    </>
  );
}

function Count({ setCount }) {
  console.log("rerendier")
  return (
    <>
      <CountRendrer />
      <Button setCount={setCount} />
    </>
  );
}

function CountRendrer() {
  const count = useContext(contextt);

  return <h1>{count}</h1>;
}
function Button({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrese</button>
    </div>
  );
}

export default App;
