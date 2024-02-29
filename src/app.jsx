import React from "react";
import ReactDOM from "react-dom/client";
import Gretting from "./components/grettings";
import List from "./components/list";
import Chai from "./components/pure";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
 <Gretting isLoggedIn={false}/>
  <List/>
  <Chai /> 
</React.StrictMode>)

export { root };
