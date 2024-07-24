import PropTypes from "prop-types";

export default function CardFooter({ children, price }) {
  return (
    <div className="flex items-center justify-between mx-2">
      <span className="text-base font-bold text-gray-950">{price}</span>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  price: PropTypes.string.isRequired,
  children: PropTypes.element,
};
