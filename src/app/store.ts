import { configureStore } from "@reduxjs/toolkit"
import userIdReducer from '../features/userId/userIdSlice'

export const store = configureStore({
    reducer: {
        userId: userIdReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch