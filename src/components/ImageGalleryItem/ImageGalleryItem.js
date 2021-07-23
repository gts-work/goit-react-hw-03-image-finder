import React from "react";

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
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={user}
        className="ImageGalleryItem-image"
        onClick={onClickImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
