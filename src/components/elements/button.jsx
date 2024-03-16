export default function Button({children, classname, onClick, type = "button"}){
  return <button type={type} className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} onClick={onClick}>{children}</button>
}