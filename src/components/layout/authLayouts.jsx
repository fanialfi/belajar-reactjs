import { Link } from "react-router-dom";
import PropTypes from "prop-types"

export default function AuthLayout({children, title, type}){
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
        
        {children}
        <Navigation type={type}/>
      </div>
    </div>)
}

function Navigation({type}){
  if(type === "login"){
    return (
       <p className="text-sm mt-5 text-center">
          {"Don't have an account ?"}
          <Link to="/register" className="font-bold text-blue-500"> register</Link>
        </p>
    )
  }
  return (
        <p className="text-sm mt-5 text-center">
          Already have an account ?
          <Link to="/login" className="font-bold text-blue-500"> login</Link>
        </p>
  )
}

// handling props validation
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  type: PropTypes.string
}

Navigation.propTypes = {
  type: PropTypes.string
}