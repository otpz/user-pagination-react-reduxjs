import { configureStore } from "@reduxjs/toolkit"
import userIdReducer from '../features/userId/userIdSlice'
import paginationReducer from "../features/pagination/pagination"

export const store = configureStore({
    reducer: {
        userId: userIdReducer,
        pagination: paginationReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch