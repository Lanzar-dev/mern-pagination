import React from "react";
import "./Card.css";

export const Card = ({ title, author, body }) => {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__author">{author}</p>
      <p className="card__body">{body}</p>
    </div>
  );
};
