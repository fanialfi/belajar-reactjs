import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

function RegisterPage() {
  return (
    <AuthLayout
      authTitle="Sign Up"
      authSubTitle={`Let's get started. Are you ready to be a part of something news ? Then boldly move forward with us`}
      typeAuth="register"
    >
      <FormRegister />
    </AuthLayout>
  );
}

export default RegisterPage;
