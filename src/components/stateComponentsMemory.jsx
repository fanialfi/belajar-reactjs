
import { useState } from "react";
import { sculptureList } from "../lib/data";

export default function Gallery(){
  // kedua state ini akan disimpan secara terpisah meskipun komponent Gallery dipanggil dua kali
  // jadi state di komponent Gallery yang satu tidak akan sama dengan komponent Gallery yang lain
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // jika value index sudah sama dengan sculptureList.length - 1 maka reset kembali ke 0
  // supaya bisa ngulang lagi dari awal
  function handleClick(){
    if (index === sculptureList.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1);
    }
  }

  function handleMoreClick(){
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (<>
    <button onClick={handleClick}>
      selanjutnya
    </button>
    <h2>
      <i>{sculpture?.name}</i>
      oleh {sculpture?.artist}
    </h2>
    <h3>
      ({index + 1} dari {sculptureList.length})
    </h3>
    <button type="button" onClick={handleMoreClick}>{showMore ? "sembunyikan" : "tampilkan"} detail</button><br />

    {/* di jsx selalu taruh variable boolean / yang bernilai thruty di depan, karena jika ditaruh di belakang maka tidak akan di render karena variable nya bukan jsx element */}
    {showMore && <p>{sculpture.description}</p>}
    <img src={sculpture.url} alt={sculpture.alt} />
  </>)
}