import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openOptionsPrice: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setOpenOptionsPrice: (state) => {
      state.openOptionsPrice = !state.openOptionsPrice;
    },
  },
});

export default uiSlice.reducer;
export const { setOpenOptionsPrice } = uiSlice.actions;
