import ButtonFunc from "../Elements/Button";
import Variants from "../Elements/Button/variants";
import InputElm from "../Elements/Input";

function FormRegister() {
  return (
    <form action="">
      <InputElm inputName="username" inputType="text">
        Username
      </InputElm>
      <InputElm inputName="email" inputType="email">
        Email
      </InputElm>
      <InputElm inputName="password" inputType="password">
        Password
      </InputElm>
      <ButtonFunc type={Variants.primary}>Sign Up</ButtonFunc>
    </form>
  );
}

export default FormRegister;
