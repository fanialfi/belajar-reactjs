import PropTypes from "prop-types";

export default function ProductBodyTitle({ title, price }) {
  return (
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">{title}</h1>
      <div className="text-lg font-semibold text-slate-500">{price}</div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 my-2">In stock</div>
    </div>
  );
}

ProductBodyTitle.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
};
