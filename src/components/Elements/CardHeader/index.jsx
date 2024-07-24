import PropTypes from "prop-types";

export default function CardHeader({ imageSrc }) {
  const imageAlt = imageSrc.split("/");
  return (
    <div>
      <img src={imageSrc} alt={imageAlt[imageAlt.length - 1]} className="object-cover h-2/3 w-full" />
    </div>
  );
}

CardHeader.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};
