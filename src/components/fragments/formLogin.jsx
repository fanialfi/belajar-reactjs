import Button from "../elements/button"
import InputForm from "../elements/input"

export default function FormLogin({action}){
  return (
  <form action={action} method="POST">
    <InputForm label="email" type="email" name="email" placeholder="example@mail.com" />
    <InputForm label="password" type="password" name="password" placeholder="*****" />
    <Button classname="bg-blue-600 w-full">Login</Button>
  </form>)
}