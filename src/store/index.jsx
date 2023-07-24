import { configureStore } from "@reduxjs/toolkit"
import  userSlice from "./slices/UserSlices";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;