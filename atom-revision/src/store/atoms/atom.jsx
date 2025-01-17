import axios from "axios";
import { atom, selector } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});
export const messageAtom = atom({
  key: "messageAtom",
  default: 100,
});
export const profileAtom = atom({
  key: "profileAtom",
  default: 12,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 102,
});

export const allNotification = atom({
    key : "all",
    default : selector({
        key : "allNotificationSelector",
        default : async()=>{
            let data = axios.get("http://localhost:5500/notification");
            let ans = await data.then((e)=> e);
            return ans.data;
        }
    })
})

export const allSelector = selector({
  key: "allSelector",
  get: async () => {
    const data = axios.get("http://localhost:5500/notification");
    let ans = await data.then((e) => e);

  },
});
// async function getData() {
//   const data = axios.get("http://localhost:5500/notification");
//   let ans = await data.then((e) => e);
//   console.log(ans);
// }
