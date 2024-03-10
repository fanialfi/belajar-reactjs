import Square from "./square";

export default function Board({xIsNext, squares, onPlay}){

  // digunakan untuk menghandle click setiap element square berdasarkan nomor indexnya yang dikirim sebagai parameter
  // untuk memasukkan nilai apakah "X" / "O" 
  // null tidak akan di anggap, 
  function handleClick(index){
    // jika kotak sudah terisi maka langsung return
    if(squares[index] || calculateWinner(squares)){
      return;
    }

    // akan membuat salinan array dari squares
    // tanpa melakukan mutasi ke array yang aslinya 
    const nextSquares = squares.slice(); // slice() akan membuat salinan array squares
    
    // inti dari sistem giliran pada papan permainan
    if (xIsNext){
      nextSquares[index] = "X";
    }else{
      nextSquares[index] = "O";
    }

    // setSquares(nextSquares); // ketika setSquares dijalanan, akan membuat / memicu render ulang komponen yang menggunakan "squares" (Board) dan komponen turunannya (Square)
    // setXIsNext(!xIsNext);

    onPlay(nextSquares);
  }

  // menentukan pemenang dari permainan 
  // apakah "X" atau "O"
  // jika belum ada yang menang maka tampilkan pemain selanjutnya
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = `Pemenang : ${winner}`;
  }else{
    status = `Pemain Selanjutnya : ${(xIsNext) ? "X" : "O"}`;
  }

  return (<>
    <div className="status">{status}</div>
    <div className="board">
      {squares.map((square, index) => (
      <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
    ))}
    </div>
  </>)
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let index = 0; index < lines.length; index++) {
    const [a,b,c] = lines[index];
    
    if (squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}