import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "../services/auth.service";
import IUser from '../types/user.type';

import Login from "../components/Login/login.component";
import Register from "../components/Login/register.component";
import Home from "../components/Login/home.component";
import Profile from "../components/Login/profile.component";
import BoardUser from "../components/Login/board-user.component";
import BoardModerator from "../components/Login/board-moderator.component";
import BoardAdmin from "../components/Login/board-admin.component";
import Menu from "../components/Login/menu.component";

import EventBus from "../common/EventBus";
import AvailableMeals from "../components/Meals/AvailableMeals";

import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import Card from "../components/UI/Card";
import BakeryList from "../components/Meals/AvailableBakery";
import AvailableBakery from "../components/Login/bakery.component";
import AvailableDrinks from "../components/Login/drink.component";
import AvailableFood from "../components/Login/food.component";
import AvailableSnack from "../components/Login/snack.component";

type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", this.logOut);
  }

  componentWillUnmount() {
    EventBus.remove("logout", this.logOut);
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div className = "homepage">
        <header className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav" style = {{paddingLeft: '30px'}}>
              <a href = "/">
                <img src="images/transparentfrankies.png" alt = "Home" style={{height: '100px', width: 'Auto'}}/>
                </a>
            {/*{showModeratorBoard && (*/}
            {/*  <li className="nav-item">*/}
            {/*    <Link to={"/mod"} className="nav-link">*/}
            {/*      Moderator Board*/}
            {/*    </Link>*/}
            {/*  </li>*/}
            {/*)}*/}

            {/*{currentUser && (*/}
            {/*  // <li className="nav-item">*/}
            {/*  //   <Link to={"/user"} className="nav-link">*/}
            {/*  //     User*/}
            {/*  //   </Link>*/}
            {/*  // </li>*/}
            {/*)}*/}
          </div>
              <Header />
          <div>
          {currentUser ? (
            <div>
              {/* <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li> */}
              <ul>
                <li>
                  <a href="#AvailableFood">
                    <Link to={"/food"} className = "nav-button">
                      Food
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#AvailableBakery">
                    <Link to={"/bakery"} className = "nav-button">
                      Bakery
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#AvailableDrinks">
                    <Link to={"/drink"} className = "nav-button">
                      Drinks
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#AvailableSnack">
                    <Link to={"/snack"} className = "nav-button">
                      Snacks
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#Login" onClick={this.logOut} className = "nav-button">
                    Log Out
                    </a>
                </li>
                <li>
                  <a href="#Profile">
                    <Link to={"/profile"} className = "nav-button">
                      Profile
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul>
                <li>
                <a href="#Login">
                  <Link to={"/login"}>
                    Login
                  </Link>
                </a>
                  </li>
                <li>
                <a href="#Sign Up">
                  <Link to={"/register"}>
                    Sign Up
                  </Link>
                </a>
                </li>
              </ul>
            </div>
          )}
          </div>
        </header>
       <main>
            <h1>
              Welcome to Frankie's Kitchen!
            </h1>

       </main>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            {/*<Route path="/user" element={<BoardUser />} />*/}
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/bakery" element={<AvailableBakery />} />
            <Route path="/drink" element={<AvailableDrinks />} />
            <Route path="/snack" element={<AvailableSnack />} />
            <Route path="/food" element={<AvailableFood />} />
          </Routes>
        </div>

      </div>
    );
  }
}

export default App;

//   return (
//     <Fragment>
//       {showCart && <Cart onHideCart={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <Meals />
//       </main>
//     </Fragment>
//   );
// };