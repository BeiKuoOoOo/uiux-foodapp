import classes from "./CartItem.module.scss";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const CartItem = (props: any) => {
    const item = props.item;
    const price = `$${item.price.toFixed(2)}`;

    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <ul className={classes.amount}> {item.amount > 5 &&
                        <ul> x {item.amount}
                            <ul className={classes["warning"]}><strong>Max 5!</strong></ul>
                        </ul>}
                        {item.amount <= 5 &&
                            <ul>x {item.amount}</ul>}</ul>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                {item.amount < 5 &&
                    <button onClick={props.onAdd}>+</button>
                }
            </div>
        </li>
    );
};
export default CartItem;