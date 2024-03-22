import { forwardRef } from "react";

// export default function Input({type, placeholder, name,ref}){
//   return <input type={type} name={name} id={name} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} ref={ref}/>
// }

const Input = forwardRef(({type,placeholder,name},ref) => {
  return (
    <input type={type} name={name} id={name} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} ref={ref} />
  )
})

export default Input;