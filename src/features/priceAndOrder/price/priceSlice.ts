import { createSlice } from '@reduxjs/toolkit'


export type priceState = {
    price: number,
    discountPrice: number,
}

const initialState: priceState = {
    price: 299,
    discountPrice: 149
}


export const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {}
})

export default priceSlice.reducer