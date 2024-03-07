import { useState } from "react";

export default function Form(){
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success"){
    return <h1>Itu Benar</h1>
  }

  async function handleSubmit(ev){
    ev.preventDefault();
    setStatus("submiting");
    try{
      await submitForm(answer);
      setStatus("success");
    }catch(error){
      setStatus("typing");
      setError(error);
    }
  }

  function handleTextAreaChange(ev){
    setAnswer(ev.target.value);
  }

  return (<>
    <h2>Kuis Kota</h2>
    <p>Di kota manakah terdapat papan reklame yang mengubah udara menjadi air minum?</p>
    <form onSubmit={handleSubmit}>
      <textarea name="kuis" id="kuis" cols="30" rows="1" value={answer} onChange={handleTextAreaChange} disabled={status === "submiting"}>
      </textarea>
      <br />
      <button disabled={answer.length === 0 || status === "submiting"}>Submit</button>
      {error !== null && <p className="Error">{error.message}</p>}
    </form>
  </>);
}

function submitForm(answer){
  // anggap kode ini melakukan request ke jaringan 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError){
        reject(new Error("tebakan yang bagus tetapi jawaban salah, silahkan coba lagi"));
      }else{
        resolve();
      }
    },1500)
  })
}