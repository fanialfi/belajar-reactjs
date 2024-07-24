import PropTypes from "prop-types";
import CardHeader from "../Elements/CardHeader";
import CardBody from "../Elements/CardBody";
import CardFooter from "../Elements/CardFooter";

function CardProduct({ children }) {
  return (
    <a href="#" className="w-full max-w-60 border border-slate-200 rounded-lg shadow overflow-hidden pb-2">
      {children}
    </a>
  );
}

CardProduct.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

CardProduct.Header = CardHeader;
CardProduct.Body = CardBody;
CardProduct.Footer = CardFooter;

export default CardProduct;
