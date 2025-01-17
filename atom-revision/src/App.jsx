import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from 'axios';

import "./App.css";
import {
  jobsAtom,
  messageAtom,
  notificationAtom,
  profileAtom,
} from "./store/atoms/atom";
import { RecoilRoot, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <h1>hi i am vivek</h1>
      <RecoilRoot>
        <AllAtoms />
      </RecoilRoot>
    </>
  );
}

function AllAtoms() {
  const notificationCount = useRecoilValue(notificationAtom);
  const messageCount = useRecoilValue(messageAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const profileCount = useRecoilValue(profileAtom);

  return <div>
    <button>Notification ({notificationCount})</button>
    <button>Message ({messageCount >= 99 ? "99+" : messageCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Profile ({profileCount})</button>
  </div>;
}

export default App;
