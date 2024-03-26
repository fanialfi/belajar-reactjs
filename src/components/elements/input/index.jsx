import { forwardRef } from "react";
import Input from "./input";
import Label from "./label";
import PropTypes from "prop-types"

// export default function InputForm({label, type, name, placeholder, ref}){
//   return (<div className="mb-6">
//     <Label htmlfor={name}>{label}</Label>
//     <Input type={type} name={name} placeholder={placeholder} id={name} ref={ref}/>
//   </div>)
// }

const InputForm  = forwardRef(({label,type,name,placeholder},ref) => {
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} id={name} ref={ref} />
    </div>
  )         
})

// definition display name for InputForm (get over eslint display name)
InputForm.displayName = "InputForm"

// handling prop validation
InputForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
}
export default InputForm