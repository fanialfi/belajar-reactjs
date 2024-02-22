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

function gantiElement(){
  // const root = ReactDOM.createRoot(document.getElementById("root"));

  const tick = ()=>{
    const element = (
      <div>
        <h1>Hello World</h1>
        <h3>it is at : {new Date().toLocaleString()}</h3>
      </div>
    );
    root.render(element);
  }

  setInterval(tick,1000);
}

root.render(
  <>
  <h1>Hello world</h1>
  <p>hai nama saya {name}</p>
  <p>hai nama saya {formatName(data)}</p>

  {/* menggunakan atribut di jsx */}
  <a href="https:www.google.com">go to google</a><br />
  <a href={url} target="_bank">go to my instagram</a> {/* ini aman terhindari dari injection */}
  {Element}
  <p>element ui yang sudah di render kita tidak bisa mengubahnya baik menambahkan children ataupun attribute,salah satu cara untuk mengupdate nya adalah membuat element baru dan meletakkannya di <code>root.render()</code></p>

  <button type="button" onClick={gantiElement}>ganti element</button>
  </>
)