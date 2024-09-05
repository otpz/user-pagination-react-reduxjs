import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchInputState {
    text: string
}

const initialState: SearchInputState = {
    text: ""
} 

export const searchInputState = createSlice({
    name: "searchInput",
    initialState: initialState,
    reducers: {
        setByEventValue: (state, action: PayloadAction<string>) => {
            state.text = action.payload 
        }
    }
})

export const {setByEventValue} = searchInputState.actions

export default searchInputState.reducer
