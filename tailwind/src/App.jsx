import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tailwind</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid red",
        }}
      >
        <div style={{ backgroundColor: "orange" }}>helloo</div>
        <div style={{ backgroundColor: "white" }}> hiiii</div>
        <div style={{ backgroundColor: "green" }}> byeeeeeee</div>
      </div>

      <div className="flex justify-between bg-green-200">
        <div className="bg-blue-700">Hii</div>
        <div>Hii</div>
        <div>Hii</div>
      </div>

      <div className="grid grid-cols-12">
        <div className="bg-yellow-400 col-span-2">Vivek</div>
        <div className="bg-red-400 col-span-5 ">kumar</div>
        <div className="bg-pink-700 col-span-2">singh</div>
        <div className="col-span-2">Vivek</div>
      </div>

      <div className="flex">
        <div className="bg-blue-900 w-[40%]">TEST</div>
        <div className="bg-red-900 w-[40%]">TEST</div>
        <div className="bg-green-900 w-[20%]">TEST</div>
      </div>

      <div className="bg-red-600 sm:bg-yellow-500 md:bg-green-400">
        RESPONSIVEEEEEEEEEEEEEEEEEE
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="">DIV 1</div>
        <div className="">DIV 2</div>
        <div className="">DIV 3</div>
      </div>
      <div className="flex flex-col justify-around sm:flex-row text-center rounded-lg">
        <div className="bg-orange-400 text-green-700 rounded-lg">DIV 1</div>
        <div className="bg-red-600 rounded">DIV 2</div>
        <div className="bg-purple-500 rounded-full text-white text-lg">DIV 3</div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
        <div className="bg-yellow-400 border-4  m-2 border-red-600">COL 1</div>
        <div className="bg-indigo-400 border-4  m-2 border-green-600">COL 2</div>
        <div className="bg-pink-400 border-4  m-2 border-blue-600">COL 3</div>
        <div className="bg-cyan-400 border-4  m-2 border-black-600">COL 4</div>
      </div>

      <div>
        <div></div>
      </div>
    </>
  );
}

export default App;
