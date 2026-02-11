import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openOptionsPrice: false,
  hideSearchBar: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setOpenOptionsPrice: (state) => {
      state.openOptionsPrice = !state.openOptionsPrice;
    },
    setHideSearchBar: (state, action) => {
      state.hideSearchBar = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const { setOpenOptionsPrice, setHideSearchBar } = uiSlice.actions;
