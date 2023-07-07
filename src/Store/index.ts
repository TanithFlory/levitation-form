import formSlice from "./Features/form.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { form: formSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


export default store;
