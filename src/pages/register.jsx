import { Link } from "react-router-dom";
import FormRegister from "../components/fragments/formRegister";
import AuthLayout from "../components/layout/authLayouts";

export default function RegisterPage(){
  return (
    <AuthLayout title="Register">
      <FormRegister action="/home" />
      <p className="text-sm mt-5 text-center">already have an account ? <Link to="/login" className="font-bold text-blue-500">login</Link></p>
    </AuthLayout>
  )
}