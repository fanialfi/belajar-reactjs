import { useState } from "react";

function Counter(){
  const [number, setNumber] = useState(0);
  function handleOnClick(){
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }

  return (<>
    <h1>{number}</h1>
    <button type="button" onClick={handleOnClick}>+3</button>
  </>)
}

export default function Form(){
  const [isSsent, setIsSent] = useState(false);
  const [message, setMessage] = useState("hello");

  if (isSsent){
    return <h1>Pesan anda sedang di kirim</h1>
  }

  function handleOnSubmit(ev,message){
    ev.preventDefault();
    setIsSent(true);
    sendMessage(message);
  }

  function handleOnChange(ev){
    setMessage(ev.target.value);
  }

  function sendMessage(message){

  }

  return (<>
    <form onSubmit={(ev)=>{
    handleOnSubmit(ev)
  }}>
    <textarea placeholder="message" value={message} cols="30" rows="10" onChange={(ev)=>{
      handleOnChange(ev)
    }}>
    </textarea>
    <button type="submit">kirim</button>

  </form>
  <Counter />
  </>)
}