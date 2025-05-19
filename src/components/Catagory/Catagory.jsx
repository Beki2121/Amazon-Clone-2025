import React from "react";
import { catagoryInfos } from "./CatagoryFullInfos";
import CatagorCard from "./CatagorCard";
import classes from "./Catagory.module.css";
function Catagory() {
  return (
    <section className={classes.catagory__container}>
      {catagoryInfos.map((infos) => (
        <CatagorCard data={infos} />
      ))}
    </section>
  );
}

export default Catagory;
