import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import mealsImage from "../../assets/img/meals.jpg";
import {Provider} from "react-redux";
import {store} from "../../app/store";

const Header = (props: any) => {
  return (
    <Fragment>
        <Provider store={store}>
      <header className={classes.header}>
        <h1>CU</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/*<div className={classes["main-image"]}>*/}
      {/*  <img src={mealsImage} alt="A table full of delicious food!" />*/}
      {/*</div>*/}
            </Provider>
    </Fragment>
  );
};

export default Header;
