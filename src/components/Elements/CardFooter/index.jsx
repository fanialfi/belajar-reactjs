import PropTypes from "prop-types";

export default function CardFooter({ price }) {
  return (
    <div className="py-1">
      <p className="font-semibold tracking-tighter">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </p>
    </div>
  );
}

CardFooter.propTypes = {
  price: PropTypes.number.isRequired,
};
