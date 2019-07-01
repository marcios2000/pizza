import React from "react";
// import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner";
import { Menu } from "./Menu/menu";
import { FoodDialog } from "./FoodDialog/foodDialog";
import { GlobalStyle } from "./css/GlobalStyle";
import { Order } from "./Menu/order"
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import {useAuthentication} from './Hooks/useAuthentication'
import Header from '../components/Header'




function ShoppingCart() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication()
  useTitle({ ...openFood, ...orders });

  

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Header {...auth}/>
      {/* <Navbar {...auth} /> */}
      <Order {...orders} {...openFood} {...auth} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default ShoppingCart;


