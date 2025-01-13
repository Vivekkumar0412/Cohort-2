import React,{ Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(()=> import("./Components/Dashboard"));
const Landing = React.lazy(()=> import("./Components/Landing"));
import { Nopage } from "./Components/Nopage";
function App() {
  // const navigate = useNavigate();
  return (
    <div>
      <BrowserRouter>
      <Appdata/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading...."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"Loading...."}><Landing /></Suspense>} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appdata() {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ color: "red" }}>Hi i am header !!!!</h1>
      <div>
        <button
          onClick={() => {
            // window.location.href = "/dashboard";
            navigate("/dashboard")
          }}
        >
          DASHBOARD
        </button>
        <button
          onClick={() => {
            // window.location.href = "/";
            navigate("/")
          }}
        >
          Home
        </button>
      </div>
    </>
  );
}

export default App;
