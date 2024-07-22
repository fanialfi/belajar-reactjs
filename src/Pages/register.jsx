import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <AuthLayout
      authTitle="Sign Up"
      authSubTitle={`Let's get started. Are you ready to be a part of something news ? Then boldly move forward with us`}
    >
      <FormRegister />
      <p className="text-center mt-6 text-slate-800">
        {`Already have an account ?`}{" "}
        <Link to="/login" className="text-sky-500 font-bold">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;
