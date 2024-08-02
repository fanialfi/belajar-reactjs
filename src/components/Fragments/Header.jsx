import PropTypes from "prop-types";

function HeaderFragment({ children }) {
  return <div className="flex items-center justify-between ">{children}</div>;
}

HeaderFragment.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default HeaderFragment;
