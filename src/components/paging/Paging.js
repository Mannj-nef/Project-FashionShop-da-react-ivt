import React from "react";

import "./style.scss";

const Paging = () => {
  const handleCallAllApi = () => {};

  return (
    <div className="paging">
      <button className="active">1</button>
      <button className="">2</button>
      <span>|</span>
      <button className="" onClick={handleCallAllApi}>
        View All
      </button>
    </div>
  );
};

export default Paging;
