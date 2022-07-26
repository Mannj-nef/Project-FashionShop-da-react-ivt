import React from "react";
import Flag from "react-world-flags";

export default function Nation(props) {
  const { nationCode, nationName, percent } = props;
  return (
    <div className="d-flex align-items-center mb-2" style={{ gap: "10px" }}>
      <Flag code={nationCode} style={{ height: "20px",width: "30px" }} />
      <div className="d-flex w-100 ">
        <div>{nationName}</div>
        <div className="ms-auto text-gray-500">
          <span data-animation="number">{percent}</span>%
        </div>
      </div>
    </div>
  );
}
