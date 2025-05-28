import React from "react";
import { categoryInfos } from "./CategoryFullInfos"; // Assuming this is defined elsewhere
import CategorCard from "./CategorCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map(
        (
          infos,
          index // Added index for key, though unique ID is better if available
        ) => (
          <CategorCard data={infos} key={infos.name || index} />
        )
      )}
    </section>
  );
}

export default Category;
