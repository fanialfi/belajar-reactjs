import { forwardRef } from "react";
import PropTypes from "prop-types"

// export default function Input({type, placeholder, name,ref}){
//   return <input type={type} name={name} id={name} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} ref={ref}/>
// }

const Input = forwardRef(({type,placeholder,name},ref) => {
  return (
    <input type={type} name={name} id={name} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} ref={ref} />
  )
})

Input.displayName = "Input"

// handling props validation
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input;