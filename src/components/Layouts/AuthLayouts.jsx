import PropsTypes from "prop-types";
import Navigation from "../Elements/Navigation";

function AuthLayout({ children, authTitle, authSubTitle, typeAuth }) {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xl rounded-md shadow-md p-4 m-4 border">
        <h1 className="text-gray-900 text-3xl font-bold mb-3 text-center">{authTitle}</h1>
        <p className="font-base text-slate-600 text-center mb-8">{authSubTitle}</p>
        {children}
        <p className="text-center mt-6 text-slate-800">
          {typeAuth === "login" ? (
            <>
              Dont have an account?{" "}
              <Navigation typeNavigation="login" navigationLocation="/register">
                Sign Up
              </Navigation>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Navigation navigationLocation="/login" typeNavigation="register">
                Sign In
              </Navigation>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropsTypes.any.isRequired,
  authTitle: PropsTypes.string.isRequired,
  authSubTitle: PropsTypes.string.isRequired,
  typeAuth: PropsTypes.string.isRequired,
};

export default AuthLayout;
