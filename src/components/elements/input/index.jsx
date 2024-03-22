import { forwardRef } from "react";
import Input from "./input";
import Label from "./label";

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
export default InputForm