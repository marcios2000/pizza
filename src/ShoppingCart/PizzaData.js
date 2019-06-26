export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}



export const foodItems = [{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza1.jpg',
  width: 4,
  height: 3,
  name: "Tomato and Herbs",
  price: 24.99,
  section: "Pizza"
 
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza2.jpeg',
  width: 4,
  height: 3,
  name: "Fresh Mozarrela",
  price: 24.99,
  section: "Pizza"


},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza3.jpg',
  width: 4,
  height: 3,
  name: "Mushroom",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza4.jpg',
  width: 4,
  height: 3,
  name: 'Avocato',
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza5.jpg',
  width: 4,
  height: 3,
  name: "Gorgonzolla and Peppers",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza6.jpg',
  width: 4,
  height: 3,
  name: "Neopolitan",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza7.jpg',
  width: 4,
  height: 3,
  name: "Pickle and Bacon",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza8.jpg',
  width: 4,
  height: 3,
  name: "Seven Cheeses",
  price: 24.99,
  section: "Pizza"


},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza9.jpeg',
  width: 4,
  height: 3,
  name: "Sesame Pizza",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza10.jpg',
  width: 4,
  height: 3,
  name: "SunDried Tomato",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza11.jpg',
  width: 4,
  height: 3,
  name: "Black Olive",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza12.jpg',
  width: 4,
  height: 3,
  name: "Basil and Tomato",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza13.jpg',
  width: 4,
  height: 3,
  name: "Green Olives",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza14.jpg',
  width: 4,
  height: 3,
  name: "Supreme",
  price: 24.99,
  section: "Pizza"


},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza15.jpg',
  width: 4,
  height: 3,
  name: "Bluberry",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza16.jpg',
  width: 4,
  height: 3,
  name: "Vegeterian",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza17.jpg',
  width: 4,
  height: 3,
  name: "Artichoke",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza18.jpg',
  width: 4,
  height: 3,
  name: "Spinach",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza19.png',
  width: 4,
  height: 3,
  name: "Sausage",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza20.jpg',
  width: 4,
  height: 3,
  name: "Oyster",
  price: 24.99,
  section: "Pizza"


},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza21.jpeg',
  width: 4,
  height: 3,
  name: "Sardine",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza22.jpg',
  width: 4,
  height: 3,
  name: "Barbecue",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza23.jpg',
  width: 4,
  height: 3,
  name: "Cherry",
  price: 24.99,
  section: "Pizza"
},{
  img: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza24.png',
  width: 4,
  height: 3,
  name: "Cheese and Spinach",
  price: 24.99,
  section: "Pizza"
}

]


export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

