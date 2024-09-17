import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import capcicon from "../../assets/capcicon.jpg";
import Paneer_Pizza from "../../assets/Paneer_Pizza.jpg";
import sweatcorn from "../../assets/sweatcorn.jpg";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ value, title, img, increment, decrement }) => {
  <div className="cartitem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="item" />
    </div>
    <div>
      <button onClick={increment}>+</button>
      <input type="number" readOnly value={value} />
      <button onClick={decrement}>-</button>
    </div>
  </div>;
};

const Cart = () => {
  const {
    cartItems: {
      capsicumPizza: { quantity: capsicumPizza },
      paneerPizza: { quantity: paneerPizza },
      sweatCornPizza: { quantity: sweatCornPizza },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "capsicumPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "paneerPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "sweatCornPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "capsicumPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (capsicumPizza === 0) break;
        dispatch({ type: "capsicumPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (paneerPizza === 0) break;
        dispatch({ type: "paneerPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (sweatCornPizza === 0) break;
        dispatch({ type: "sweatCornPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (capsicumPizza === 0) break;
        dispatch({ type: "capsicumPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Capsicum Pizza"}
          img={capcicon}
          value={capsicumPizza}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Paneer Pizza"}
          img={Paneer_Pizza}
          value={paneerPizza}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Sweat Corn Pizza"}
          img={sweatcorn}
          value={sweatCornPizza}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
