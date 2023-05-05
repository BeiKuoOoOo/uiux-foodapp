import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableSnack = [
    {
        id: "m1",
        name: "Snickers",
        price: 2,
    },
    {
        id: "m2",
        name: "Milano",
        price: 2,
    },
    {
        id: "m3",
        name: "Granola Bars",
        price: 2,
    },
    {
        id: "m4",
        name: "Skittles",
        price: 2,
    },
    {
        id: "m5",
        name: "Lay's Chips",
        price: 2,
    },
    {
        id: "m6",
        name: "Doritos",
        price: 2,
    },
    {
        id: "m7",
        name: "Cheetos",
        price: 2,
    },
];

const SnackList = () => {
  const snackList = (
    <ul>
      {AvailableSnack.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
  return (
    <div className={classes.container}>
      <Card>{snackList}</Card>
    </div>
  );
};

export default SnackList;