import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableDrinks = [
    {
        id: "m1",
        name: "Poland Springs",
        price: 1,
    },
    {
        id: "m2",
        name: "Coke",
        price: 2,
    },
    {
        id: "m3",
        name: "Diet Coke",
        price: 2,
    },
    {
        id: "m4",
        name: "Sprite",
        price: 2,
    },
    {
        id: "m5",
        name: "Pepsi",
        price: 2,
    },
    {
        id: "m6",
        name: "Super Coffee",
        price: 4,
    },
    {
        id: "m7",
        name: "Orange Juice",
        price: 3,
    },
    {
        id: "m8",
        name: "Apple Juice",
        price: 3,
    },

];

const DrinkList = () => {
  const drinkList = (
    <ul>
      {AvailableDrinks.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
  return (
    <div className={classes.container}>
      <Card>{drinkList}</Card>
    </div>
  );
};

export default DrinkList;