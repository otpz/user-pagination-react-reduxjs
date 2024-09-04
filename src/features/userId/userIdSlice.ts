import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


export interface UserIdState {
    id: number
}

const initialState: UserIdState = {
    id: 1
}

export const userIdSlice = createSlice({
    name: 'userId',
    initialState: initialState,
    reducers: {
        setByInput: (state, action: PayloadAction<number>) => {
            state.id = action.payload
        }
    }
})

export const {setByInput} = userIdSlice.actions

export default userIdSlice.reducer