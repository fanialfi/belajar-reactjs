// import { useState } from "react";
import { useImmer } from "use-immer";



export default function Form(){
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(ev){
    setPerson((draf) => {
      draf.name = ev.target.value
    });
  }

  function handleTitleChange(ev){
    setPerson(draft => {
      draft.artwork.title = ev.target.value;
    })
  }

  function handleCityChange(ev){
    setPerson((draf)=>{
      draf.artwork.city = ev.target.value
    });
  }

  function handleImageChange(ev){
    setPerson(draf => {
      draf.artwork.image = ev.target.value
    })
  }

      return (<>
      <form>
      <label htmlFor="nama">Nama :</label>
      <input type="text" name="nama" id="nama" value={person.name} onChange={handleNameChange}/>

      <label htmlFor="judul">Judul :</label>
      <input type="text" name="judul" id="judul" value={person.artwork.title} onChange={handleTitleChange} />

      <label htmlFor="kota">Kota :</label>
      <input type="text" name="kota" id="kota" value={person.artwork.city} onChange={handleCityChange} />

      <label htmlFor="gambar">Gambar :</label>
      <input type="text" name="gambar" id="gambar" value={person.artwork.image} onChange={handleImageChange}/>
    </form>
    <p>
      <i>{person.artwork.title}</i>
      {" by "}
      {person.name}
      <br />
      (terletak di {person.artwork.city})
    </p>
    <img src={person.artwork.image} alt={person.artwork.title}/>
    </>)
}


function FormBefore(){
  const [person, setPerson] = useImmer({
    firstName:"fani",
    lastName:"alfirdaus",
    email:"fanialfirdaus@gmail.com"
  });

  function handleFirstNameChange(ev){
    // tidak bekerja karena handler onChange mengubah state
    // person.firstName = ev.target.value;

    setPerson({
      ...person,
      firstName:ev.target.value
    })
  }

  function handleLastNameChange(ev){
    // person.lastName = ev.target.value;
    setPerson({
      ...person,
      lastName:ev.target.value
    })
  }

  function handleEmailChange(ev){
    // person.email = ev.target.value;
    setPerson({
      ...person,
      email:ev.target.value
    })
  }

  return (<>
    <label htmlFor="firstName">Nama Depan</label>
    <input type="text" name="firstName" id="firstName" value={person.firstName} onChange={handleFirstNameChange}/>

    <label htmlFor="lastName">Nama Belakang</label>
    <input type="text"  name="lastName" id="lastName" value={person.lastName} onChange={handleLastNameChange}/>

    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" value={person.email} onChange={handleEmailChange}/>

    <p>
      {person.firstName }
      {person.lastName}
      ({person.email})
    </p>
  </>)
}

function MovingDot(){
  const [position, setPosition] = useImmer({
    x : 0,
    y: 0,
  })

  function changePointerMove(ev){
    // kode ini melakukan modifikasi object position
    // tanpa menggunakan fungsi yang mengubah state
    // position.x = ev.clientX;
    // position.y = ev.clientY;

    // cara yang benar
    // memperlakukan object state seperti read only
    // sama seperti memperlakukan tipe data primirif (number, string, boolean)
    setPosition({
      x:ev.clientX,
      y:ev.clientY
    })
  }

  return (<div onPointerMove={(ev)=> changePointerMove(ev)} style={{
    position:'relative',
    width:'100vw',
    height:'100vh'
  }}>
    <div style={{
      position:'absolute',
      backgroundColor:'red',
      borderRadius:'50%',
      transform:`translate(${position.x}px, ${position.y}px)`,
      left:-10,
      top:-10,
      width:20,
      height:20
    }}>

    </div>
  </div>)
}