import PropTypes from "prop-types";

export default function CardBodyTitle({ children }) {
  return <h5 className="text-base tracking-tight text-gray-900 truncate">{children}</h5>;
}

CardBodyTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
