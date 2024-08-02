import PropTypes from "prop-types";
import LiELement from "./Li";

function UlElement({ children }) {
  return <ul className="flex">{children}</ul>;
}

UlElement.li = LiELement;

UlElement.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default UlElement;
