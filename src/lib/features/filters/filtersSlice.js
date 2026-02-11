import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchField: "",
  priceSlider: 250,
  filterTypes: [],
  filterCapacities: [],
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
    updateFilterTypes: (state, action) => {
      const type = action.payload;
      const types = state.filterTypes;
      state.filterTypes = types.includes(type)
        ? types.filter((item) => item != type)
        : [...types, type];
    },
    updateFilterCapacities: (state, action) => {
      const cap = action.payload;
      const caps = state.filterCapacities;
      state.filterCapacities = caps.includes(cap)
        ? caps.filter((item) => item != cap)
        : [...caps, cap];
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
  updateFilterCapacities,
  updateFilterTypes,
  updateFavorite,
} = filtersSlice.actions;
