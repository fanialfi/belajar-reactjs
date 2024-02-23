import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const name = "john doe";

const data = {
  firstName:"fani",
  lastName:"alfirdaus"
};



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
  <App name={name} data={data}/>
  {Element}
  <p>element ui yang sudah di render kita tidak bisa mengubahnya baik menambahkan children ataupun attribute,salah satu cara untuk mengupdate nya adalah membuat element baru dan meletakkannya di <code>root.render()</code></p>

  <button type="button" onClick={gantiElement}>ganti element</button>
  </>
)