import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchField: "",
  priceSlider: 50,
  filterOptions: [],
  favorite: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateSearchField: (state, action) => {
      state.searchField = action.payload;
    },
    updatePriceSlider: (state, action) => {
      state.priceSlider = action.payload;
    },
    updateFilterOptions: (state, action) => {
      const option = action.payload;
      const options = state.filterOptions;
      state.filterOptions = options.includes(option)
        ? options.filter((item) => item != option)
        : [...options, option];
    },
    updateFavorite: (state) => {
      state.favorite = !state.favorite;
    },
  },
});

export default filtersSlice.reducer;
export const {
  updateSearchField,
  updatePriceSlider,
  updateFilterOptions,
  updateFavorite,
} = filtersSlice.actions;
