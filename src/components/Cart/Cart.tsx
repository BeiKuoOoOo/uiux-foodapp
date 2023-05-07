import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.scss";
import IMeal from "../../types/IMeal";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addMeal, removeMeal, emptyCart} from "../../app/mealSlice";
import {Link} from "react-router-dom";
import {useState} from "react";


const Cart = (props: any): JSX.Element => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const dispatch = useAppDispatch();
    const mealState = useAppSelector((state) => state.meals);
    const meals = mealState.meals;
    const hasMeals = meals.length > 0;
    const totalAmount = `$${mealState.totalAmount.toFixed(2)}`;

    const cartItemAddHandler = (meal: IMeal) => {
        dispatch(addMeal({...meal, amount: 1}));
    };

    const cartItemRemoveHandler = (id: string) => {
        dispatch(removeMeal(id));
    };

    const cartItemEmptyHandler = () => {
        dispatch(emptyCart());
    };


    const cartItems = (
        <ul className={classes["cart-items"]}>
            {meals.map((item: IMeal) => {
                return (
                    <CartItem
                        key={item.id}
                        item={item}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    />
                );
            })}
        </ul>
    );
    const [clickedButton, setClickedButton] = useState('');

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        setClickedButton(button.name);
    };

    return (
        <Modal onClose={props.onHideCart}>
            {!hasMeals && (
                <p className={classes["no-items"]}>No meals in your cart</p>
            )}
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                {clickedButton !== ""
                    ? 'Order Placed!'
                    : ""}
                <button className={classes["button--alt"]} onClick={props.onHideCart}>
                    Close
                </button>
                {hasMeals && (
                    <button
                        className={classes["button--empty"]}
                        onClick={cartItemEmptyHandler}
                    >
                        Empty Cart
                    </button>
                )}
                {hasMeals && (
                    <div className="container">
                        <form>
                            <button onClick={event => {
                                cartItemEmptyHandler();
                                buttonHandler(event);
                            }} className="button" name="button 1">Order
                            </button>
                        </form>
                        <h3>
                        </h3>
                        <Link to={"/order"}>
                            Order Page
                        </Link>
                    </div>
                )}
            </div>
        </Modal>
    );
};


export default Cart;