import { Link } from "react-router-dom";
import PropsTypes from "prop-types";

export default function Navigation({ typeNavigation, navigationLocation, children }) {
  switch (typeNavigation) {
    case "login":
      return (
        <Link to={navigationLocation} className="text-sky-500 font-bold">
          {children}
        </Link>
      );

    case "register":
      return (
        <Link to={navigationLocation} className="text-sky-500 font-bold">
          {children}
        </Link>
      );
  }
}

Navigation.propTypes = {
  typeNavigation: PropsTypes.string.isRequired,
  navigationLocation: PropsTypes.string.isRequired,
  children: PropsTypes.string.isRequired,
};
