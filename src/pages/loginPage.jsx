import FormLogin from "../components/fragments/formLogin";
import AuthLayout from "../components/layout/authLayouts";

export default function LoginPage(){
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin action="/home" />
    </AuthLayout>
  )
}