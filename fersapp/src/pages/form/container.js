import React from "react";
import "./styles.css";

const Container = props => {
  return (
    <div className="form-container">
      <h2>{props.heading}</h2>
      {props.content}
    </div>
  );
};

export default Container;
