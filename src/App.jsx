import React from "react";

export default function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-4">
        <ButtonCls />
        <ButtonFc message={"Hello World"} bgCollor={"bg-red-500"}/>
      </div>
    </div>
  )
}

function ButtonFc({message, bgCollor}){
  return <button type="submit" className={`h-10 px-6 font-semibold rounded-md ${bgCollor} text-white`}>{message}</button>
}

class ButtonCls extends React.Component {
  render(){
    return <button type="submit" className="h-10 px-6 font-semibold rounded-md bg-slate-100 text-black">Buy Now</button>
  }
}