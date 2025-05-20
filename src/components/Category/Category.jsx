import React from "react";
import { categoryInfos } from "./CategoryFullInfos";
import CategorCard from "./CategorCard";
import classes from "./Category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategorCard data={infos} />
      ))}
    </section>
  );
}

export default Category;
