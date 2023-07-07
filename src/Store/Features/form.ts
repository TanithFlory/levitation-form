import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFormData } from "../../types";
const initialState: IFormData = {
  name: "",
  email: "",
  phone_number: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  pincode: 0,
  country: "",
  geolocation: "",
};

const formSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<IFormData>) => {
      return (state = {
        ...state,
        ...action.payload,
      });
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
