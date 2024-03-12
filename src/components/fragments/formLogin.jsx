import Button from "../elements/button"
import InputForm from "../elements/input"

export default function FormLogin(){
  return (
  <form action="" method="POST">
    <InputForm label="email" type="email" name="email" placeholder="example@mail.com" id="email" />
    <InputForm label="password" type="password" name="password" placeholder="*****" id="password" />
    <Button classname="bg-blue-600 w-full">Login</Button>
  </form>)
}