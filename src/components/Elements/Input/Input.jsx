import PropTypes from "prop-types";

function Input({ inputType, inputName, handleInputchange }) {
  return (
    <input
      type={inputType}
      name={inputName}
      id={inputName}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 focus:outline-1 focus:outline-slate-500 peer"
      onChange={handleInputchange}
    />
  );
}

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  handleInputchange: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default Input;
