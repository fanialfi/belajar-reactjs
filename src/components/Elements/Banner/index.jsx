import PropTypes from "prop-types";

export default function Banner({ children }) {
  return (
    <div className="px-4 flex items-center">
      <h2 className="font-bold text-lg">{children}</h2>
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.node,
};
