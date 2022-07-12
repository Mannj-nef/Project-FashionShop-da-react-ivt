import React from "react";

const ImageSlider = ({ imageSlider }) => {
  return (
    <div className="max-h-[570px] h-full flex w-[456px]">
      <img className="slider-image" src={imageSlider} alt="" />
    </div>
  );
};

export default ImageSlider;
