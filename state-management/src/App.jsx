import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { testContext } from "./context";
import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <testContext.Provider value={count}> */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      {/* </testContext.Provider> */}
    </>
  );
}

function Count() {
  // let count = useContext(testContext)
  let count = 0;
  console.log("hiii")
  return (
    <>
      <CountRender />
      <EvenRender/>
      <Buttons />
    </>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
function EvenRender(){
  const count = useRecoilValue(countAtom);
  console.log("even")
  if(count % 2== 0){
    return(
      <h1>Event count</h1>
    )
  }
}
function Buttons() {
  console.log("bitioolkjkl")
  // let count = useContext(testContext)
  // let count = 0;
  // let [count, setCount] = useRecoilState(countAtom);
  let setCount = useSetRecoilState(countAtom)
  return (
    <>
      <button onClick={() => setCount(count=> count + 1)}>Increase</button>
      <button onClick={() => setCount(count=> count - 1)}>Decrease</button>
    </>
  );
}

export default App;
