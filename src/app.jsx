import React from "react";
import ReactDOM from "react-dom/client";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const name = "john doe";

function formatName(name){
  return `${name.firstName} ${name.lastName}`;
}

const data = {
  firstName:"fani",
  lastName:"alfirdaus"
};

const url = "https://www.instagram.com/fanialfi_";

// membuat element menggunakan react
// React.createElement(type,props,...children)
const Element = React.createElement(
  "h1",
  null,
  "to my instagram click ",
  React.createElement(
    "a",
    {href:"https:www.instagram.com/fanialfi_",target:"_blank"},
    " here"
  )
)

root.render(
  <>
  <h1>Hello world</h1>
  <p>hai nama saya {name}</p>
  <p>hai nama saya {formatName(data)}</p>

  {/* menggunakan atribut di jsx */}
  <a href="https:www.google.com">go to google</a><br />
  <a href={url} target="_bank">go to my instagram</a> {/* ini aman terhindari dari injection */}
  {Element}
  </>
)