import PropTypes from "prop-types";

export default function ProductsLayout({ children }) {
  return <div className="container flex flex-wrap gap-2 justify-evenly my-4 mx-auto p-2">{children}</div>;
}

ProductsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
