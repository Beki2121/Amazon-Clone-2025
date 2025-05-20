import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurencyFormat";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

  return (
    <LayOut>
      <section className={classes.container} style={{ padding: "20px" }}>
        <div className={classes.cart_container}>
          <h2>Hello {user ? user.name : "Guest"}</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                flex={true}
                renderAdd={false} // optional, depending on how ProductCard handles it
              />
            ))
          )}
        </div>

        {basket?.length !==0&&(
          <div className={classes.subtotal} style={{ marginTop: "40px" }}>
            <div style={{ fontWeight: "bold" }}>
              <p>Subtotal ({basket.length} items):</p>
              <CurrencyFormat amount={total} />
            </div>
            <span style={{ display: "block", marginTop: "10px" }}>
              <input type="checkbox" />
              <small style={{ marginLeft: "8px" }}>
                This order contains a gift
              </small>
            </span>
            <Link
              to="/payment"
              style={{
                display: "inline-block",
                marginTop: "20px",
                color: "blue",
              }}
            >
              Continue to checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
