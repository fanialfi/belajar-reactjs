import PropTypes from "prop-types";

export default function Li({ children }) {
  return <li className="py-2 mx-8 text-base">{children}</li>;
}

Li.propTypes = {
  children: PropTypes.string.isRequired,
};
