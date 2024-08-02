import PropTypes from "prop-types";

function NavigationFragment({ children }) {
  return (
    <div className="px-4 flex items-center">
      <nav className="max-w-full">{children}</nav>
    </div>
  );
}

NavigationFragment.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NavigationFragment;
