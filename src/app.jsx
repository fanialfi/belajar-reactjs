import { useState } from "react";
import calculateWinner from "./lib/calculateWinner";

function Square({value, onSquareClick}){
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquareClick(index){
    if (squares[index] || calculateWinner(squares)) return; // jika sudah ada isinya maka langsung return tanpa menjalankan script di bawah

    const nextSquare = squares.slice();
    
    // if (xIsNext){
    //   nextSquare[index] = "X";
    // }else{
    //   nextSquare[index] = "O";
    // }
    nextSquare[index] = (xIsNext) ? "X" :"O";

    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = ""
  if (winner){
    status = `winner : ${winner}`
  }else{
    status = `next player : ${(xIsNext) ? "X":"O"}`
  }

  return (<>
  <div className="status">{status}</div>
  <div className="board">
    {squares.map((value, index) => (
      <Square key={index} value={value} onSquareClick={()=>{handleSquareClick(index)}}/>
    ))}
  </div></>)
}