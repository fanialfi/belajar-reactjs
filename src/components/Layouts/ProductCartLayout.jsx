import PropTypes from "prop-types";

export default function ProductCartLayout({ children }) {
  return <div className="container w-full mx-auto  my-4 mt-20">{children}</div>;
}

ProductCartLayout.propTypes = {
  children: PropTypes.node,
};
