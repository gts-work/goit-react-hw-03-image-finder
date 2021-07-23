import React from "react";

import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, user, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          user={user}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
