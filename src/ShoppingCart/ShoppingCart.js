import React, { useState } from "react";
// import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner";
import { Menu } from "./Menu/menu";
import { FoodDialog } from "./FoodDialog/foodDialog";
import { GlobalStyle } from "./css/GlobalStyle";
import { Order } from "./Menu/order"
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";

function ShoppingCart() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      {/* <Navbar /> */}
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default ShoppingCart;


