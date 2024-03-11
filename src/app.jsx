import { useState } from "react";

export default function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsnext] = useState(true);

  function handleSquareClick(index){
    if(squares[index] || calculateWinner(squares)) return;
    
    const squaresCopy = squares.slice();

    if(xIsNext){
      squaresCopy[index] = "X";
    }else{
      squaresCopy[index] = "O";
    }

    setSquares(squaresCopy);
    setXIsnext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let message;
  if (winner) {
    message = `winner : ${winner}`;
  }else{
    message = `pemain selanjutnya : ${(xIsNext) ? "X" : "O"}`
  }

  return (<>
    <div className="status">{message}</div>
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onSquareClick={() => handleSquareClick(index)}/>
      ))}
    </div>
    </>)
}

function Square({value, onSquareClick}){
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

function calculateWinner(squares){
  const line = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (let index = 0; index < line.length; index++) {
    const [a,b,c] = line[index];
    if (squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }

  return null;
}