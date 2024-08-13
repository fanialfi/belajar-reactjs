import PropTypes from "prop-types";
import LiELement from "./Li";

const dataList = ["home", "products", "about", "project", "contact"];

function UlElement({ children }) {
  return <ul className="flex">{children}</ul>;
}

UlElement.li = LiELement;

UlElement.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

UlElement.dataList = dataList;

export default UlElement;
