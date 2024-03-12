import Button from "../elements/button"
import InputForm from "../elements/input"

export default function FormRegister(){
  return (
  <form action="" method="POST">
    <InputForm label="Fullname" type="text" name="Fullname" placeholder="insert your name here" id="Fullname" />
    <InputForm label="Email" type="email" name="Email" placeholder="mail@example.com" id="Email" />
    <InputForm label="Password" type="password" name="Password" placeholder="*****" id="Password" />
    <InputForm label="Confirm Password" type="passsword" name="confirmPassword" placeholder="*****" id="confirmPassword" />
    <Button classname="bg-blue-600 w-full">Register</Button>
  </form>)
}