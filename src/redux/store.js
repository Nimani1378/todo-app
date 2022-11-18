import { configureStore } from '@reduxjs/toolkit'
import todo_reducer from "./slices"

export const store = configureStore({
  reducer: {
    ToDo : todo_reducer,
  },
})

