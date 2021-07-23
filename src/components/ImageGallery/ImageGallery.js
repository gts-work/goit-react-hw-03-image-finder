import React from "react";

import ImageGalleryItem from "../ImageGalleryItem";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, showLargeImage }) => {
  return (
    <ul className={style.image_gallery}>
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
