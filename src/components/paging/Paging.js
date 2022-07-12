import React from "react";

import useClickActive from "../../hooks/useClickActive";
import "./style.scss";

const Paging = () => {
  useClickActive(".btn");

  const handleCallAllApi = () => {};

  return (
    <div className="paging">
      <button className="btn active">1</button>
      <button className="btn">2</button>
      <span>|</span>
      <button className="btn" onClick={handleCallAllApi}>
        View All
      </button>
    </div>
  );
};

export default Paging;
