import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./optionSlice"
import videoAskButtonReducer from "./videoAskButtonSlice"

export const store = configureStore({
    reducer: {
      optionDoc:optionReducer,
      videoAskButton:videoAskButtonReducer
    },
  });

  export default store
  