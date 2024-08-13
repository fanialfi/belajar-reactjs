import ButtonFunc from "../Elements/Button";
import Variants from "../Elements/Button/variants";
import InputElm from "../Elements/Input";

function FormLogin() {
  const handleLogin = (ev) => {
    ev.preventDefault();
    const username = ev.target.username.value;
    const password = ev.target.password.value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "/dashboard/products";
  };

  return (
    <form onSubmit={handleLogin} className="text-center">
      <InputElm inputName="username" inputType="text">
        Username
      </InputElm>
      <InputElm inputName="password" inputType="password">
        Password
      </InputElm>
      <ButtonFunc type={Variants.primary} typeButton="submit">
        Sign In
      </ButtonFunc>
    </form>
  );
}

export default FormLogin;
