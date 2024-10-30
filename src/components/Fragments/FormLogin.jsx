import ButtonFunc from "../Elements/Button";
import Variants from "../Elements/Button/variants";
import InputElm from "../Elements/Input";
import authLogin from "../../services/authlogin.service";
import { useState } from "react";

function FormLogin() {
  const [statusLogin, setStatusLogin] = useState("");
  const handleLogin = (ev) => {
    ev.preventDefault();
    const username = ev.target.username.value;
    const password = ev.target.password.value;
    const postAuthLogin = async (username, password) => {
      try {
        const result = await authLogin(username, password);
        setStatusLogin("");
        localStorage.setItem("token", result?.data?.token);
        window.location.href = "/dashboard/products";
      } catch (error) {
        setStatusLogin(error?.response?.data);
      }
    };
    postAuthLogin(username, password);
  };

  return (
    <form onSubmit={handleLogin} className="text-center">
      <InputElm inputName="username" inputType="text">
        Username
      </InputElm>
      <InputElm inputName="password" inputType="password">
        Password
      </InputElm>
      <p className="text-red-500">{statusLogin}</p>
      <ButtonFunc type={Variants.primary} typeButton="submit">
        Sign In
      </ButtonFunc>
    </form>
  );
}

export default FormLogin;
