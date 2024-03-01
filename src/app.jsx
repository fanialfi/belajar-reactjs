import React from "react";
import ReactDOM from "react-dom/client";
import { ToolBar } from "./components/respondingEvents";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <ToolBar/>
</React.StrictMode>)

export { root };
