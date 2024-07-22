import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

function LoginPage() {
  return (
    <AuthLayout authTitle="Sign In" authSubTitle="Please enter your credentials to log in">
      <FormLogin />
      <p className="text-center mt-6 text-slate-800">
        {`Don't have an account ?`}{" "}
        <Link to="/register" className="text-sky-500 font-bold">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;
