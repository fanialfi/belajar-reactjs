import PropTypes from "prop-types";
import { useState } from "react";
import Label from "./Label";
import Input from "./Input";

function InputElm({ inputType, children, inputName }) {
  const [isField, setIsField] = useState(false);
  const handleInputchange = (ev) => {
    setIsField(ev.target.value !== "");
  };

  return (
    <div className="mb-4 my-9 relative">
      <Input inputType={inputType} handleInputchange={handleInputchange} inputName={inputName} />
      <Label isField={isField} labelName={inputName}>
        {children}
      </Label>
    </div>
  );
}

InputElm.propTypes = {
  inputType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default InputElm;
