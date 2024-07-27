import PropTypes from "prop-types";

export default function CardFooter({ price }) {
  return (
    <div className="py-1">
      <p className="font-semibold tracking-tighter">{price}</p>
    </div>
  );
}

CardFooter.propTypes = {
  price: PropTypes.string.isRequired,
};
