import PropsTypes from "prop-types";

function AuthLayout({ children, authTitle, authSubTitle }) {
  return (
    <div className="w-full max-w-xl rounded-md shadow-md p-4 m-4 border">
      <h1 className="text-gray-900 text-3xl font-bold mb-3 text-center">{authTitle}</h1>
      <p className="font-base text-slate-600 text-center mb-8">{authSubTitle}</p>
      {children}
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropsTypes.element.isRequired,
  authTitle: PropsTypes.string.isRequired,
  authSubTitle: PropsTypes.string.isRequired,
};

export default AuthLayout;
