import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

function LoginPage() {
  return (
    <AuthLayout authTitle="Sign In" authSubTitle="Please enter your credentials to log in" typeAuth="login">
      <FormLogin />
    </AuthLayout>
  );
}

export default LoginPage;
