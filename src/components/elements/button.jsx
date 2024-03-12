export default function Button({children, classname}){
  return <button type="submit" className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}>{children}</button>
}