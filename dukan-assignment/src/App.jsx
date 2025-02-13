import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AmountCard } from "./Components/AmountCard";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>tstdafaf</h1> */}
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <AmountCard title={"Vivek"} amount={"590000"} order={"55"} isBlue= {true} />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Singh"} amount={"798798"} order={"55"}  />
        <AmountCard title={"Rajput"} amount={"897879"} order={"55"}  />
      </div>
      <Footer/>
    </>
  );
}

export default App;
