import React from "react";
import "./MenuItem.css";

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
        </header>
        <p className="item-text">{desc}</p>
        <span className="item-price">${price}</span>
      </div>
    </article>
  );
};

export default MenuItem;
