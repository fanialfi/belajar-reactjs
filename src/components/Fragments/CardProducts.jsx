import PropTypes from "prop-types";
import CardHeader from "../Elements/CardHeader";
import CardBody from "../Elements/CardBody";
import CardFooter from "../Elements/CardFooter";

function CardProduct({ children, handleClick }) {
  return (
    <div
      className="p-2 flex flex-col w-40 rounded-md h-52 box-border hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

CardProduct.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  handleClick: PropTypes.func,
};

CardProduct.Header = CardHeader;
CardProduct.Body = CardBody;
CardProduct.Footer = CardFooter;

export default CardProduct;
