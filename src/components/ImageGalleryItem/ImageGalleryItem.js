import React from "react";

const ImageGalleryItem = ({ id, user, largeImageURL, webformatURL }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={user} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
