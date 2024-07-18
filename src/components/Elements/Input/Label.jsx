import PropTypes from "prop-types";

function Label({ isField, children, labelName }) {
  return (
    <label
      htmlFor={labelName}
      className={`block peer-focus:text-slate-700 peer-focus:opacity-100 text-sm font-semibold mb-2 absolute left-3 ${
        isField ? "-translate-y-16 text-slate-700 opacity-100" : "-translate-y-7 opacity-50"
      } peer-focus:-translate-y-16 transition-all peer-focus:duration-500 cursor-text`}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  isField: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default Label;
