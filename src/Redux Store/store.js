import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./optionSlice"
import videoAskButtonReducer from "./videoAskButtonSlice"
import optionSlectedReducer from "./optionSelectedSlice"
import singleOptionSelectedReducer from "./singleOptionSelectedSlice"
import optionNumberReducer from "./optionNumberSlice"
import redirectingReducer from "./RedirectingSlice"

export const store = configureStore({
    reducer: {
      optionDoc:optionReducer,
      videoAskButton:videoAskButtonReducer,
      optionSelected:optionSlectedReducer,
      singleOptionSelected:singleOptionSelectedReducer,
      optionNumber:optionNumberReducer,
      redirecting:redirectingReducer
    },
  });

  export default store
  