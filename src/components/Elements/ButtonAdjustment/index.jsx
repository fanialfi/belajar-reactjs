import PropTypes from "prop-types";

export default function ButtonAdjustment({ onClick, id, children }) {
  return (
    <button className="font-bold text-lg p-3 py-1" onClick={() => onClick(id)}>
      {children}
    </button>
  );
}

ButtonAdjustment.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  children: PropTypes.string.isRequired,
};
