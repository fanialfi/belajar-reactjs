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
          <a href="/login">login</a>
        </ButtonFunc>
        <ButtonFunc type={Variants.primary}>
          <a href="/register">register</a>
        </ButtonFunc>
      </div>
    </div>
  );
}

export default HomePage;
