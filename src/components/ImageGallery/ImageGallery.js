import React from "react";

import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images, showLargeImage }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, user, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          user={user}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          onClick={showLargeImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
