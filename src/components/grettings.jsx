import React from "react";
import { root } from "../app";
import randomColor from "../lib/rgb";

function Clock(){
  let [clock, setClock] = React.useState(new Date());

  try{
    return (<>
      <h1>this is at {clock?.toLocaleTimeString()}</h1>
    </>)
  }finally{
    setInterval(() => {
      setClock(new Date())
    }, 1000);
  }
}

function UserGretting(){
  return (<>
    <h1>Hello User</h1>
    <Clock />
    <button type="button" onClick={randomColor}>change color backgrounf</button>
  </>)
}

function login(){
  root.render(<UserGretting/>)
}

function GuestGretting(){
  return <button type="submit" onClick={login}>login</button>
}

export default function Gretting(props){
  const isLoggedIn = props?.isLoggedIn;

  if (isLoggedIn){
    return <UserGretting/>
  }else{
    return <GuestGretting/>
  }
}