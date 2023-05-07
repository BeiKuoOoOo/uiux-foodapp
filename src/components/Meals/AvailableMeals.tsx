import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const Bakery = [
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

const Food = [
    {
        id: "m1",
        name: "Salmon Teriyaki",
        description: "Salmon teriyaki over rice. Served with steamed vegetables.",
        price: 7,
    },
    {
        id: "m2",
        name: "Spicy Chicken Sandwich",
        description: "A sandwich with a fried spicy chicken, veggies, and a choice of swiss of provolone cheese",
        price: 6,
    },
    {
        id: "m3",
        name: "Ham and Cheese Sandwich",
        description: "A sandwich with ham, veggies, and a choice of swiss of provolone cheese",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Stuffed Shell",
        description: "Stuffed shell served in tomato sauce, topped with mozzarella cheese",
        price: 6,
    },
    {
        id: "m5",
        name: "Korean BBQ",
        description: "Korean BBQ over rice. Served with steamed vegetables.",
        price: 7,
    },
    {
        id: "m6",
        name: "Garlic Salmon",
        description: "Garlic salmon over rice. Served with steamed vegetables.",
        price: 7,
    },
    {
        id: "m7",
        name: "Cheese Burger",
        description: "Cheese burger with vegetables and pickles. Served with fries.",
        price: 6,
    },
    {
        id: "m8",
        name: "Fruit Box",
        description: "A box of assorted fruits, including berries, grapes, melon, oranges, and pineapple.",
        price: 4,
    },
    {
        id: "m9",
        name: "Bagles with Cream Cheese",
        description: "Toasted bagels with plain cream cheese",
        price: 6,
    },
];

const Snacks = [
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

const Drinks = [
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
  const drinkList = (
    <ul>
      {Drinks.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
  const snackList = (
    <ul>
      {Snacks.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
  return (
    <div className={classes.container}>
      <Card>{foodList}</Card>
      <Card>{bakeryList}</Card>
      <Card>{drinkList}</Card>
      <Card>{snackList}</Card>
    </div>
  );
};

export default AvailableMeals;