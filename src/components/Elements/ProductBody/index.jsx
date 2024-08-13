import PropTypes from "prop-types";
import ProductBodyTitle from "./ProductBodyTitle";
import ProductBodyDesc from "./ProductBodyDesc";
import ProductBodyFooter from "./ProductBodyFooter";

export default function ProductBody({ children }) {
  return <form className="flex-auto p-6 flex flex-col justify-between">{children}</form>;
}

ProductBody.title = ProductBodyTitle;
ProductBody.desc = ProductBodyDesc;
ProductBody.footer = ProductBodyFooter;
ProductBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
