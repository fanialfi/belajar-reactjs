import PropTypes from "prop-types";

export default function ProductsLayout({ children }) {
  return <div className="flex justify-center gap-4 py-5 flex-wrap">{children}</div>;
}

ProductsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
