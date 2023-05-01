import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import {store} from "../../app/store";
import {Provider} from "react-redux";

const Meals = () => {
  return (
    <Fragment>
        <Provider store={store} >
      <MealsSummary />
      <AvailableMeals />
        </Provider>
    </Fragment>
  );
};

export default Meals;
