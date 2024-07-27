import PropTypes from "prop-types";

export default function CardHeader({ imageSrc }) {
  const imageAlt = imageSrc.split("/");
  return (
    <div className="flex-none  basis-2/3 relative rounded-md overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt[imageAlt.length - 1]}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

CardHeader.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};
