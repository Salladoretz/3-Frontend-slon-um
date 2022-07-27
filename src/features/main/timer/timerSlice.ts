import { createSlice } from '@reduxjs/toolkit'


export type timerState = {
    deadline: Date
}

const initialState: timerState = {
    deadline: new Date(2022, 10, 1)
}


export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {}
})

export default timerSlice.reducer