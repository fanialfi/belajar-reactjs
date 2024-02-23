import { FormatName } from "./formatName";

const url = "https://www.instagram.com/fanialfi_";

export default function App(props){
  return (<>
    <h1>Hello World</h1>
    <p>hai nama saya {props.name}</p>
    <FormatName nama={props.data} />
     {/* menggunakan atribut di jsx */}
  <a href="https:www.google.com">go to google</a><br />
  <a href={url} target="_bank">go to my instagram</a> {/* ini aman terhindari dari injection */}
  </>)
}