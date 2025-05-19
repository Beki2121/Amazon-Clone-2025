import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import ProductCard from "../../components/Product/ProductCard"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl  from "../../API/endpoints"; 
import "./Results.module.css";
import Loader from "../../components/Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);   
  const { catagoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/catagory/${catagoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [catagoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {catagoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
