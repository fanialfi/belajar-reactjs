import PropTypes from "prop-types";

function CardBody({ title }) {
  return (
    <div className="py-1">
      <h4 className="truncate">{title}</h4>
    </div>
  );
}

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardBody;
