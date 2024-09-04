import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface PaginationState {
    pageNumber: number
}

const initialState: PaginationState = {
    pageNumber: 1
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        setNumberByClicking: (state, action: PayloadAction<number>) => {
            state.pageNumber = action.payload
        }
    }
})

export const {setNumberByClicking} = paginationSlice.actions

export default paginationSlice.reducer