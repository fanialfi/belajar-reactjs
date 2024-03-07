import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/managingState";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <Form/>
</React.StrictMode>)

export { root };
