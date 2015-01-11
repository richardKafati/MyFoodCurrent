if (Foods.find().count() === 0) {
  Foods.insert(
    {
      food: "banana",
      foodCategory: "Fruit",
      quantity: "53",
      quantityDescriptor: "bananas"
    }
  );
  Foods.insert(
    {
      food: "pumpkin",
      foodCategory: "Starch",
      quantity: "1",
      quantityDescriptor: "pumpkins"
    }
  );
  Foods.insert(
    {
      food: "lentil",
      foodCategory: "Beans",
      quantity: "1",
      quantityDescriptor: "cup"
    }
  );
  Foods.insert(
    {
      food: "green juice",
      foodCategory: "Greens",
      quantity: "1.3",
      quantityDescriptor: "liters"
    }
  );
  Foods.insert(
  {
    food: "pineapple",
    foodCategory: "Fruit",
    quantity: "4",
    quantityDescriptor: "pineapples"
  }
);
}
