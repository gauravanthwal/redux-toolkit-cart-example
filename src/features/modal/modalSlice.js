import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.openModal = true;
    },
    hideModal: (state) => {
      state.openModal = false;
    },
  },
});


export const {hideModal, showModal} = modalSlice.actions;
export default modalSlice.reducer;
