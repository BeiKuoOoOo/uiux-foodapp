import React, { Fragment, useState } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

import {store} from "../../app/store";
import {Provider} from "react-redux";
import Header from "../Layout/Header"
import Cart from "../Cart/Cart"
import Food from "./AvailableFood";
const Meals = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
        <Provider store={store} >
            {showCart && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Food />
            </main>
        </Provider>
    </Fragment>
  );
};

export default Meals;

