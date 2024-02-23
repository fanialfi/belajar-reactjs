/* 
secara konsep komponen itu seperti function biasa yang dapat menerima arbitrary input ( disebut props di react)
dan mengambalikan react element yang mendesktripsikan apa yang akan muncul di layar
*/

function FormatName(props){
  return <h1>{props.nama.firstName} {props.nama.lastName}</h1>
}

export { FormatName };
