import FormRegister from "../components/fragments/formRegister";
import AuthLayout from "../components/layout/authLayouts";

export default function RegisterPage(){
  return (
    <AuthLayout title="Register">
      <FormRegister/>
    </AuthLayout>
  )
}