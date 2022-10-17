import { configureStore } from '@reduxjs/toolkit'
import todo_reducer from "./slices"
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    ToDo : todo_reducer,
  },
})

