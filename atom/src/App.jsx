import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { countAtom, evenSelector } from "./store/atoms/atom";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Atom </h1>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  console.log("count")
  return (
    <>
      <CountRendereer />
      <EvenRndrer/>
      <Buttons />
    </>
  );
}
function EvenRndrer(){
  let isEven = useRecoilValue(evenSelector);
  return(
    <div>
      {isEven ? "Even Value" : null} 
    </div>
  )
}
function CountRendereer() {
  console.log("count rendreeee")
  let count = useRecoilValue(countAtom);
  return <h1>{count}</h1>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button onClick={()=> setCount((prev)=> prev + 1)}>INC</button>
      <button onClick={()=> setCount((prev)=> prev - 1)}>DEC</button>
    </div>
  );
}

export default App;
