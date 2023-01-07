import React from "react";
import { Link } from "react-router-dom";
import "./menuItem.styles.scss";

const MenuItem = ({ imageUrl, title }) => (
  <Link to={`/shop/${title}`} className="menu-item">
    <div
      className="background-image"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
    <div className="content">
      <span className="title">{title}</span>
      <span className="subtitle">SHOPNOW</span>
    </div>
  </Link>
);

export default MenuItem;
