import Button from "../elements/button"
import InputForm from "../elements/input"
import PropTypes from "prop-types"

export default function FormRegister({action}){
  return (
  <form action={action} method="POST">
    <InputForm label="Fullname" type="text" name="Fullname" placeholder="insert your name here" />
    <InputForm label="Email" type="email" name="Email" placeholder="mail@example.com" />
    <InputForm label="Password" type="password" name="Password" placeholder="*****" />
    <InputForm label="Confirm Password" type="password" name="confirmPassword" placeholder="*****" />
    <Button classname="bg-blue-600 w-full">Register</Button>
  </form>)
}

// handling props validation
FormRegister.propTypes = {
  action: PropTypes.string
}