import ButtonFunc from "../Elements/Button";
import Variants from "../Elements/Button/variants";
import InputElm from "../Elements/Input";

function FormLogin() {
  return (
    <form action="" className="text-center">
      <InputElm inputName="username" inputType="text">
        Username
      </InputElm>
      <InputElm inputName="password" inputType="password">
        Password
      </InputElm>
      <ButtonFunc type={Variants.primary}>Sign In</ButtonFunc>
    </form>
  );
}

export default FormLogin;
