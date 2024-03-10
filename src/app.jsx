import { useState } from "react";
import Board from "./board";

export default function Game(){
  // digunakan untuk bergiliran pemain
  // apakah gilirannya "X" atau "O" yang secara default adalah "X" untuk pertama kalinya
  // setiap kali pemain bergerak nilai dari xIsNext akan dibalik
  const [xIsNext, setXIsNext] = useState(true); 
  
  // digunakan untuk mengelola history dengan nilai default 1 element array 
  // dimana 1 element tersebut akan berisi keadaan terakhir dari Board
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // digunakan untuk implementasi kembali ke belakang 
  // dan digunakan untuk melacak langkah mana yang sedang dilihat oleh pengguna
  const [currentMove, setCurrentMove] = useState(0);

  // berisi sebuah array digunakan untuk menyimpan keadaan terakhir dari history 
  // yang akan di parsing ke element Board
  const currentSquare = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1),nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const move = history.map((squares,indexMove) => {
    let description;
    if (indexMove > 0){
      description = `Pergi Ke Langka #${indexMove}`;
    }else{
      description = `Pergi Ke Awal Permainan`;
    }

    return (<li key={indexMove}>
      <button type="button" onClick={() => {jumpTo(indexMove)}}>{description}</button>
    </li>)
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {move}
        </ol>
      </div>
    </div>
  )
}