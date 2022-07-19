import React from "react";

const Reviews = ({ buyer, children }) => {
  return (
    <div className="reviews-item  border-t barder-[#ccc]">
      <div className="w-full">
        <p className="flex items-center justify-between">
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: 500,
              marginBottom: "10px",
            }}
          >
            {buyer?.name || "Name name name"}
          </span>
          <span style={{ fontSize: "1.3rem" }}>
            {buyer?.date || "date date date"}
          </span>
        </p>
        <div className="flex items-center my-3">
          {children}
          <h2 className="ml-5 font-semibold">
            {buyer?.title || "Lorem ipsum dolor sit amet consectetur"}
          </h2>
        </div>
        <p className="pr-[40%]">
          {buyer?.description ||
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni at similique impedit illo officia atque nesciunt, voluptatibus ipsa adipisci fugit qui, esse iusto placeat odio soluta nisi modi tempora."}
        </p>
        lorem
      </div>
    </div>
  );
};

export default Reviews;
