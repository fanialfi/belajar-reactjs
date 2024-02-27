import ReactDOM from "react-dom/client";
import Gretting from "./components/grettings";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Gretting isLoggedIn={false}/>)

export { root };
