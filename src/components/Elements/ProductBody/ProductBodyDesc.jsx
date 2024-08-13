import PropTypes from "prop-types";

export default function ProductBodyDesc({ children }) {
  return <p className="my-2 text-sm text-slate-700 flex-auto">{children}</p>;
}

ProductBodyDesc.propTypes = {
  children: PropTypes.string,
};
