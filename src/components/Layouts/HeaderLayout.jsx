import { forwardRef } from "react";
import PropTypes from "prop-types";

const HeaderLayout = forwardRef(({ children }, ref) => {
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-10 flex justify-between px-16 items-center py-4" ref={ref}>
        <div className="container">{children}</div>
      </header>
      <div className="py-5"></div>
    </div>
  );
});

HeaderLayout.displayName = "HeaderLayout";
HeaderLayout.propTypes = {
  children: PropTypes.node,
};

export default HeaderLayout;
