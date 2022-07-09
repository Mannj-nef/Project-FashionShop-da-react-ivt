import React from "react";

const Skeleton = ({ width, height, children }) => {
  return (
    <div
      className="skeleton"
      style={{ Width: width || "100%", height: height }}
    >
      {children}
    </div>
  );
};

export default Skeleton;
