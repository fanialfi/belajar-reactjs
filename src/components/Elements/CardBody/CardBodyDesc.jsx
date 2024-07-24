import PropTypes from "prop-types";

export default function CardBodyDesc({ children }) {
  return <p className="text-sm text-gray-700">{children}</p>;
}

CardBodyDesc.propTypes = {
  children: PropTypes.string.isRequired,
};
