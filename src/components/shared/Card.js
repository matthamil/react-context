import React from "react";
import { PropTypes as T } from "prop-types";
import "./Card.css";

const Card = ({ gridColumn, title, children }) => (
  <section className="card" style={{ gridColumn }}>
    <header>{title}</header>
    {children}
  </section>
);

Card.propTypes = {
  title: T.string.isRequired,
  children: T.node.isRequired
};

export default Card;
