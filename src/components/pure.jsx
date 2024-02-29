
function Recipe(props){
  return (<>
    <ol>
      <li>boil {props?.drinkers} cup of water</li>
      <li>add {props?.drinkers} spoons of tea and {0.5 * props?.drinkers} spoons of spice</li>
      <li>add {0.5 * props?.drinkers} cups of milk to boil and sugar to taste</li>
    </ol>
  </>)  
}

export default function Chai(){
  return (<>
    <section style={{textAlign:"left"}}>
      <h1>spiced chai recipe</h1>
      <h2>for two</h2>
      <Recipe drinkers={2} />

      <h2>for a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  </>)
}