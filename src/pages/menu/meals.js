const meals = [
  {
    id: 1,
    category: "Pasta",
    photo: "/pictures/Spaghetti 1.jpg",
    name: "Spaghetti bolognese",
    rating: 3.2,
    description: "Juicy italian spaghetti bolognese with cheese",
    price: 2500,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 2,
    category: "Rice",
    photo: "/pictures/Rice 1.jpg",
    name: "Fried rice",
    rating: 4.8,
    description: "Well garnished fried rice with liver chops",
    price: 2000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 3,
    category: "Rice",
    photo: "/pictures/Rice 2.jpg",
    name: "Jollof rice, chicken and plantains combo",
    rating: 4.9,
    description:
      "Delicious Nigerian jollof rice combo with fried plantains and peppered chicken",
    price: 4000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 4,
    category: "Swallow",
    photo: "/pictures/Swallow 1.jpeg",
    name: "Amala and ewedu",
    rating: 5.0,
    description:
      "Delicious Nigerian jollof rice combo with fried plantains and peppered chicken",
    price: 3000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 5,
    category: "Rice",
    photo: "/pictures/Rice 3.jpeg",
    name: "Fried rice, chicken and plantains combo",
    rating: 3.0,
    description:
      "Delicious Nigerian jollof rice combo with fried plantains and peppered chicken",
    price: 4000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 6,
    category: "Swallow",
    photo: "/pictures/Swallow 2.jpg",
    name: "Pounded yam and egusi",
    rating: 3.0,
    description:
      "Delicious Nigerian jollof rice combo with fried plantains and peppered chicken",
    price: 4000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 7,
    category: "Others",
    photo: "/pictures/Potatoes 1.jpg",
    name: "Poached Potatoes",
    rating: 3.1,
    description:
      "Delicious Nigerian jollof rice combo with fried plantains and peppered chicken",
    price: 4000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 8,
    category: "Snacks",
    photo: "/pictures/Snack 1.jpg",
    name: "Burger and fries",
    rating: 3.2,
    description:
      "Delicious Nigerian jollof rice combo with fried plantains and peppered chicken",
    price: 4000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
  {
    id: 9,
    category: "Grills",
    photo: "/pictures/Grill 1.jpg",
    name: "Steak",
    rating: 4.2,
    description:
      "Delicious Nigerian jollof rice combo with fried plantains and peppered chicken",
    price: 4000,
    compliments: [
      {
        id: 1,
        mealComplimentName: "Coleslaw",
        mealComplimentPhoto: "/pictures/Coleslaw 1.jpg",
        mealComplimentPrice: 1000,
      },
      {
        id: 2,
        mealComplimentName: "Moi-moi",
        mealComplimentPhoto: "/pictures/Moimoi 1.jpeg",
        mealComplimentPrice: 1000,
      },
      {
        id: 3,
        mealComplimentName: "Plantain",
        mealComplimentPhoto: "/pictures/Plantain 1.jpg",
        mealComplimentPrice: 1000,
      },
    ],
  },
];

export default meals;
