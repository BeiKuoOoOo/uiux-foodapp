import { Fragment } from "react";
import { Link } from "react-router-dom";
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
        <a href="/">
          <img src="/images/transparentfrankies.png" alt="Home" className={classes.logo} />
        </a>
        <nav>
          <ul>
            <li>
              <Link to ="/menu" className = {classes.button}>MENU</Link>
            </li>
          </ul>
        </nav>
        <HeaderCartButton onClick={props.onShowCart} />
        <nav>
          <ul>
            <li>
                <button className={classes.button + " " + classes["button-logout"]}>LOG OUT</button>
            </li>
          </ul>
        </nav>
      </header>
      {/*<div className={classes["main-image"]}>*/}
      {/*  <img src={mealsImage} alt="A table full of delicious food!" />*/}
      {/*</div>*/}
            </Provider>
    </Fragment>
  );
};

export default Header;
