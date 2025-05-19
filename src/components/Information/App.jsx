import React from "react";
import "./style.css";

export default function Information({ title, informations }) {
  return (
    <div className="footer-information">
      <h3>{title}</h3>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}