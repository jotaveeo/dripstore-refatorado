import React from "react";
import "./style.css";

export default function Section({
  title = "Produtos em alta",
  titleAlign = "left",
  link = { text: "Veja Mais →", href: "/produtos" },
  children,
}) {
  return (
    <section className="section-container">
      <div className="section-header" style={{ textAlign: titleAlign }}>
        <h2 className="section-title">{title}</h2>
        {link && (
          <a href={link.href} className="section-link">
            {link.text}
          </a>
        )}
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}