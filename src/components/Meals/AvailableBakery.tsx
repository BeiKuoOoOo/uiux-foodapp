import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableBakery = [
    {
        id: "m1",
        name: "Chocolate Chip Muffin",
        description: "Muffins with chocolate chips",
        price: 3,
    },
    {
        id: "m2",
        name: "Double Chocolate Muffin",
        description: "Chocolate muffins with chocolate chips",
        price: 3
    },
    {
        id: "m3",
        name: "Blueberry Muffin",
        description: "Muffins with sweet blueberry",
        price: 3,
    },
    {
        id: "m4",
        name: "Raisin Muffin",
        description: "Muffins with raisins",
        price: 3,

    },
    {
        id: "m5",
        name: "Banana Muffin",
        description: "Muffins with banana seeds",
        price: 3,

    },
    {
        id: "m6",
        name: "Croissant",
        description: "Soft croissants made with excellent butter",
        price: 4,

    },
    {
        id: "m7",
        name: "Cookies",
        description: "A pack of 2 chocolate chip cookies and 1 white chocolate with macadmia nuts cookie",
        price: 3,

    }
];
const BakeryList = () => {
  const bakeryList = (
    <ul>
      {AvailableBakery.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
  return (
    <div className={classes.container}>
      <Card>{bakeryList}</Card>
    </div>
  );
};

export default BakeryList;