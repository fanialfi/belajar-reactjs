const fruits = ["apel","melon","mangga","nanas"];

export default function List(){
  return(<>
  <ul style={{textAlign:"left"}}>
    {/* untuk membuat list harus ada key, dimana key nya harus unik dari yang lain */}
    {fruits.map((fruit) => (<li key={fruit}>{fruit}</li>))}
  </ul>
  </>)
}