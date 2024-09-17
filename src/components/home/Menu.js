import React from 'react'
import MenuCard from './MenuCard'
import "../../styles/menu.scss"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import capcicon from "../../assets/capcicon.jpg"
import Paneer_Pizza from "../../assets/Paneer_Pizza.jpg"
import sweatcorn from "../../assets/sweatcorn.jpg"
// import veg_burger from "../../assets/veg_burger.webp"
// import double_cheeze_bur from "../../assets/double_cheeze_bur.jpg"
// import non_veg_burger from "../../assets/non_veg_burger.jpg"


const Menu = () => {

  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "capsicumPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "paneerPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "sweatCornPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "capsicumPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          pizzaSrc={capcicon}
          price={200}
          title="Capsicum Pizza"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          pizzaSrc={Paneer_Pizza}
          price={500}
          title="Paneer Pizza"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          pizzaSrc={sweatcorn}
          price={1800}
          title="Sweat Corn Pizza"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu
