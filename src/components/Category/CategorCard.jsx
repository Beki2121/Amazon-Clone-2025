import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";

function CategorCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imagLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategorCard;
