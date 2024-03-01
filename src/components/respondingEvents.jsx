function Button({message, children}){
  function handleClick(){
    alert(message)
  }

  // digunakan untuk menghentikan propagasi event
  return <button type="submit" onClick={(ev) => {
    ev.stopPropagation();
    handleClick()
  }}>{children}</button>
}

function Signup(){
  return (
    // di bawah ini ketika saya tekan tombol enter atau submit di button maka akan memuat ulang seluruh halaman secara bawaan
    <form action="./" onSubmit={(ev)=>{
      ev.preventDefault(); // maka dibutuhkan preventDefault untuk menghentikannya
      alert("submiting form ...");
}}>
      <input type="text" />
      <Button message={"submiting"}>send</Button>
    </form>
  )
}

function ToolBar(){
  // akan mengalami propagasi event
  return (<Signup/>)
}

export { ToolBar };

