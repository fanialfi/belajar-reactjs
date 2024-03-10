// props value berisi sebuah array squares yang telah di pecah nilainya 
// dimasukkan ke dalam square dalam bentuk "X" "O" / null sebagai default
export default function Square({value, onSquareClick}){
  return <button className="square" onClick={onSquareClick}>{value}</button>
}