import React from "react";
import { useController } from "react-hook-form";
import "./style.scss";

const Input = ({ label, control, error, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });

  return (
    <div className="input-wrapper mb-4">
      {label ? (
        <label htmlFor={props.id || props.name} className="label">
          {label}
        </label>
      ) : (
        ""
      )}
      <input type="text" className="input-control" {...props} {...field} />
      {error ? <p className="text-red-500 pt-4 ">{error}</p> : ""}
    </div>
  );
};

export default Input;
