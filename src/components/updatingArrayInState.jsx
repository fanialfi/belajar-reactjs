import { useState } from "react";

let nextId = 3;
const initialList = [
  {id:0,"title":"Big Bellies",seen:false},
  {id:1,"title":"Lunar Lanscape",seen:false},
  {id:2,"title":"Terrocatta Army",seen:true}
]

export default function BucketList(){
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(atworkId,nextSeen){
  //   const myNextList = [...myList];
  //   const atwork = myList.find(
  //   a => a.id === atworkId
  // );

  // atwork.seen = nextSeen; // masalah : memutasikan item yang sudah ada

  setMyList(myList.map((atwork) => {
    if (atwork.id === atworkId){
      // buat object baru dengan perubahan
      return {...atwork, seen:nextSeen}
    }else{
      return atwork
    }
  }));
  }

  function handleToggleYourList(atworkId, nextSeen){
    // const yourNextList = [...yourList];
    // const atwork = yourNextList.find(
    //   a => a.id === atworkId
    // );

    // atwork.seen = nextSeen; // kasusnya sama seperti di atas
    setYourList(yourList.map((atwork) => {
      if (atwork.id === atworkId){
        return {...atwork, seen:nextSeen}
      }else{
        return atwork;
      }
    }));
  }

  return (<>
    <h1>Art Bucket List</h1>
    <h2>My List of art to see :</h2>
    <ItemList
      atwork={myList}
      onToggle={handleToggleMyList} />
    <h2>Your List of art to see :</h2>
    <ItemList
      atwork={yourList}
      onToggle={handleToggleYourList}/>
  </>)
}

function ItemList({atwork,onToggle}){
  return (<ul>
    {atwork.map((atwork) => (
      <li key={atwork.id}>
        <label htmlFor="">
          <input type="checkbox" name="checkbox" id="checkbox" checked={atwork.seen} onChange={(e) => {
            onToggle(atwork.id,e.target.checked)
          }} />
          {atwork.title}
        </label>
      </li>
    ))}
  </ul>)
}

function Button({handleButton,argument}){
  return (<button onClick={handleButton}>{argument}</button>)
}

function CounterList(){
  const [counters, setCounter] = useState([0,0,0]);

  function handleIncrementClick(index){
    const nextCounters = counters.map((c,i) => {
      if (i === index){
        // penambahan saat di click
        return c + 1;
      }else{
        return c;
      }
    })

    setCounter(nextCounters);
  }

  return (<ul>
    {counters.map((counter,index) => 
      <li key={index}>
        {counter}
        <Button handleButton={()=>handleIncrementClick(index)} argument={"+1"}/>
      </li>
    )}
  </ul>)
}

function List(){
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  function handleNameChange(ev){
    setName(ev.target.value);
  }

  function handleButtonPlusClick(){
    // hindari mutasi senarai / array
    // artists.push({
      // id:nextId++,
      // name:name
    // })

    setArtists([
      {id:nextId++, name:name},
      ...artists // meletakkan item lama di akhir
    ])
    setName("")
  }

  function handleButtonDeleteClick(artist){
    setArtists(
      artists.filter(a => 
        a.id !== artist.id
      )
    );
  }

  return (<>
    <h1>Hello World</h1>
    <input type="text" name="name" id="name" value={name} onChange={handleNameChange}/>

    <Button handleButton={handleButtonPlusClick} argument={"tambah"}/>
    <ul>
      {artists.map((artist) => (
        <li key={artist.id}>
          {artist.name}
          <Button handleButton={()=> {handleButtonDeleteClick(artist)}} argument={"hapus"}/>
        </li>
      ))}
    </ul>
  </>)
}