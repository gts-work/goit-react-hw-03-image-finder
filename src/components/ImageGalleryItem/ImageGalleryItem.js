import React from "react";

import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  id,
  user,
  largeImageURL,
  webformatURL,
  onClick,
}) => {
  console.log("onlickImage ~ onClick: ", onClick);

  const onClickImage = (e) => {
    console.log("onlickImage ~ e: ", largeImageURL);
    onClick({ largeImageURL });
  };

  return (
    <li key={id} className={style.image_gallery_item}>
      <img
        src={webformatURL}
        alt={user}
        className={style.image_gallery_item_image}
        onClick={onClickImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
