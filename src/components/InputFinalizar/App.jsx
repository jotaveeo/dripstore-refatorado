import React from "react";
import "./style.css";

export default function InputFinalizar({
  htmlFor,
  text,
  id,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input-finalizar-campo">
      <label htmlFor={htmlFor}>{text}</label>
      <input
      className="input-finalizar-info"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
