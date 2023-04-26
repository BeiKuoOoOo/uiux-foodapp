import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const Food = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Bakery = [
  {
    id: "m1",
    name: "test1",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "test2",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "test3",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "test4",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const foodList = (
    <ul>
      {Food.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
  const bakeryList = (
    <ul>
      {Bakery.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );

  return (
    <div className={classes.container}>
      <Card>{foodList}</Card>
      <Card>{bakeryList}</Card>
    </div>
  );
};

export default AvailableMeals;
