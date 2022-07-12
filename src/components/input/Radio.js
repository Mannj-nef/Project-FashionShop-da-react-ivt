import React from "react";

const Radio = ({ onChange, ...props }) => {
  return (
    <div className="h-3 flex ">
      <input type="radio" {...props} />
    </div>
  );
};

export default Radio;
