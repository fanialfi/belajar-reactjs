import PropTypes from "prop-types";

export default function TotalAmount({ data }) {
  return (
    <div className="flex justify-between">
      <p>Total</p>
      <span>
        {data
          .reduce((acc, cur) => cur?.price * cur?.qty + acc, 0)
          .toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
    </div>
  );
}

TotalAmount.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
