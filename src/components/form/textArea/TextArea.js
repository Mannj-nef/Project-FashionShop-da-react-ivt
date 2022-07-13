import React, { useEffect, useRef, useState } from "react";
import { useController } from "react-hook-form";

const TextArea = ({ label, control, error, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });

  return (
    <div className="textArea-wrapper">
      {label ? (
        <label htmlFor={props.id || props.name} className="label">
          {label}
        </label>
      ) : (
        ""
      )}

      <textarea className="textArea-control" {...props} {...field} />
      {error ? <p className="text-red-500 pt-4">{error}</p> : ""}
    </div>
  );
};

export default TextArea;
