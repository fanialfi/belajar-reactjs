import { useEffect, useRef } from "react";
import Button from "../elements/button";
import InputForm from "../elements/input";

export default function FormLogin(){
  function handleLogin(ev){
    ev.preventDefault();
    const data = {
      email:ev?.target?.email?.value,
      password:ev?.target?.password?.value,
      isLogin:true
    }
    localStorage.setItem("data",JSON.stringify(data))
    window.location.href = "/products"
  }

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  },[])

  return (
  <form onSubmit={(ev) => handleLogin(ev)}>
    <InputForm label="email" type="email" name="email" placeholder="example@mail.com" ref={emailRef}/>
    <InputForm label="password" type="password" name="password" placeholder="*****" />
    <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
  </form>)
}