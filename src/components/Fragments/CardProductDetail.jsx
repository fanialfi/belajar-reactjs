import PropTypes from "prop-types";

export default function CardProductDetail({ children }) {
  return <div className="flex font-sans max-w-[600px]">{children}</div>;
}

CardProductDetail.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
