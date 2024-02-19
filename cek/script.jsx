import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function App(props){
  return (<>
    <h1>hello from {props.name ? props.name : "react"}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus, incidunt dolores repellat excepturi, quisquam minima necessitatibus quod adipisci deserunt eligendi vero illo hic vitae officia neque, facere vel voluptate.</p>
  </>)
}

root.render(
  <App name="fanialfi"/>
)