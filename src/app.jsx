import { useState } from "react";

function Square(){
  const [value, setValue] = useState("");

  function handleButtonClick(){
    setValue("X");
  }

  return <button className="square" onClick={handleButtonClick}>{value}</button>
}

export default function Board(){
  return (<div className="board">
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
  </div>)
}