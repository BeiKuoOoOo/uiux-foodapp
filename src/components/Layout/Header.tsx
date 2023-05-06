import React, {useState} from 'react';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import mealsImage from "../../assets/img/meals.jpg";
import {Provider} from "react-redux";
import {store} from "../../app/store";

const Header = (props: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown(){
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <Fragment>
      <Provider store={store}>
        <header className={classes.header} style={{paddingRight: '200px',paddingTop :'15px'}}>

          {/*<a href="/">*/}
          {/*  <img src="/images/transparentfrankies.png" alt="Home" className={classes.logo} />*/}
          {/*</a>*/}

          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/menu"><button className={classes.button}>MENU</button></Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}
          <HeaderCartButton onClick={props.onShowCart} style = {{paddingRight: '100px'}}/>
          

          {/*<div className={classes["profile-dropdown"]} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>*/}
          {/*  <a href="/">*/}
          {/*    <img src="/images/proficon.jpg" alt="profile" className={classes.profileicon} />*/}
          {/*  </a>*/}
          {/*  {isDropdownOpen &&*/}
          {/*    <div className={classes["dropdown-content"]}>*/}
          {/*      <Link to = "/profile">*/}
          {/*        <button className={classes.button}>Profile</button>*/}
          {/*      </Link>*/}
          {/*      <button className={classes.button + " " + classes["button-logout"]}>LOG OUT</button>*/}
          {/*    </div>*/}
          {/*  }*/}
          {/*</div>*/}
        </header>
        {/*<div className={classes["main-image"]}>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>*/}
      </Provider>
    </Fragment>
  );
};

export default Header;
