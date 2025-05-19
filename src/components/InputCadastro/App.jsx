import React from "react";
import "./style.css";

export default function InputCadastro({
  htmlFor,
  text,
  id,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input-cadastro-campo">
      <label htmlFor={htmlFor}>{text}</label>
      <input className=""
        id={id}
        type={type}
        placeholder={placeholder}
        value={value} // Valor controlado pelo estado no componente pai
        onChange={onChange} // Dispara o evento para atualizar o estado
      />
    </div>
  );
}
