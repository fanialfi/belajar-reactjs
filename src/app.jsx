import React from "react";
import ReactDOM from "react-dom/client";
import BucketList from "./components/updatingArrayInState";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <BucketList/>
</React.StrictMode>)

export { root };
