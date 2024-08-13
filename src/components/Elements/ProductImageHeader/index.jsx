import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductImageHeader({ imageUrl }) {
  const [imageAlt, setImageAlt] = useState("");

  useEffect(() => {
    if (imageUrl) {
      setImageAlt(imageUrl.split("/"));
    }
  }, [imageUrl]);

  return (
    <div className="flex-none w-48 relative">
      <img
        src={imageUrl}
        alt={imageAlt[imageAlt.length - 1]}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

ProductImageHeader.propTypes = {
  imageUrl: PropTypes.string,
};
