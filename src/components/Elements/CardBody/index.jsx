import PropTypes from "prop-types";
import CardBodyTitle from "./CardBodyTitle";
import CardBodyDesc from "./CardBodyDesc";

function CardBody({ children }) {
  return <div className="py-2 px-1">{children}</div>;
}

CardBody.propTypes = {
  children: PropTypes.element,
};

CardBody.Title = CardBodyTitle;
CardBody.Desc = CardBodyDesc;

export default CardBody;
