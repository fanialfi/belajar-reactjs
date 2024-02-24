import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

function Tick(){
  // statement di bawah disebut state hooks
  const [clock, setClock] = React.useState(new Date()); // argument yang dimasukkan kedalam function useState disebut inisialisasi nilai awal untuk variable clock
  
  try{
    return (<>
    <h1>Hello World</h1>
    <h3>this is at {clock?.toLocaleTimeString()}</h3>
  </>)
  }finally{
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  }
}

function changeBackground(){
  const max = 255;
  let r = Math.floor(Math.random() * max);
  let g = Math.floor(Math.random() * max);
  let b = Math.floor(Math.random() * max);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}

function Button(){
  return (
    <button type="button" onClick={changeBackground}>click</button>
  )
}

setInterval(()=>{
  root.render(<>
  <Tick date={new Date()}/>
  <Button />
  </>)
},  1000)