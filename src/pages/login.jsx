import { Link } from "react-router-dom";
import FormLogin from "../components/fragments/formLogin";
import AuthLayout from "../components/layout/authLayouts";

export default function LoginPage(){
  return (
    <AuthLayout title="Login">
      <FormLogin action="/home" />
      <p className="text-sm mt-5 text-center">Don't have an account ? <Link to="/register" className="font-bold text-blue-500">register</Link></p>
    </AuthLayout>
  )
}