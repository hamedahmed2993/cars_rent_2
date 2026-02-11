import { createSlice } from "@reduxjs/toolkit";
import { updateFavorite } from "../filters/filtersSlice";

const initialState = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    image: "/car.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    favorite: false,
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    image: "/car.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 120,
    favorite: false,
  },
  {
    id: 3,
    name: "Rolls Royce",
    type: "Luxury",
    image: "/car.png",
    fuel: "100L",
    transmission: "Automatic",
    capacity: "4 People",
    price: 250,
    favorite: false,
  },
  {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    image: "/car.png",
    fuel: "70L",
    transmission: "Automatic",
    capacity: "6 People",
    price: 80,
    favorite: false,
  },
  {
    id: 5,
    name: "CR-V",
    type: "SUV",
    image: "/car.png",
    fuel: "75L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 95,
    favorite: false,
  },
  {
    id: 6,
    name: "MG ZX",
    type: "Hatchback",
    image: "/car.png",
    fuel: "60L",
    transmission: "Manual",
    capacity: "4 People",
    price: 70,
    favorite: false,
  },
];

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateFavoriteCar: (state, action) => {
      const carId = action.payload;
      const car = state.find((c) => c.id === carId);
      if (car) {
        car.favorite = !car.favorite;
      }
    },
  },
});

export default carsSlice.reducer;
export const { updateFavoriteCar } = carsSlice.actions;
