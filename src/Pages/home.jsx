import { Link } from "react-router-dom";
import ButtonFunc from "../components/Elements/Button";
import Variants from "../components/Elements/Button/variants";

function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-violet-500 bg-clip-text text-transparent">
        Hello World
      </h1>
      <div className="flex gap-x-8">
        <ButtonFunc type={Variants.primary}>
          <Link to="/login">
            <p>login</p>
          </Link>
        </ButtonFunc>
        <ButtonFunc type={Variants.primary}>
          <Link to="/register">
            <p>register</p>
          </Link>
        </ButtonFunc>
      </div>
    </div>
  );
}

export default HomePage;
