import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

function LoginPage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayout authTitle="Sign In" authSubTitle="Please enter your credentials to log in">
        <FormLogin />
      </AuthLayout>
    </div>
  );
}

export default LoginPage;
