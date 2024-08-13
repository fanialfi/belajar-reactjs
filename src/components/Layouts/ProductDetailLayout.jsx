import PropTypes from "prop-types";

export default function ProductDetailLayout({ children }) {
  return <div className="flex justify-center min-h-screen items-center">{children}</div>;
}

ProductDetailLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
