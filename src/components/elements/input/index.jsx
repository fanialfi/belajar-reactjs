import Input from "./input";
import Label from "./label";

export default function InputForm({label, type, name, placeholder}){
  return (<div className="mb-6">
    <Label htmlfor={name}>{label}</Label>
    <Input type={type} name={name} placeholder={placeholder} id={name}/>
  </div>)
}