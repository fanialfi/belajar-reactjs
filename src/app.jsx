import ReactDOM from "react-dom/client";
import Gretting from "./components/grettings";
import List from "./components/list";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
  <Gretting isLoggedIn={false}/>
  <List/>
</>)

export { root };
