import { createSlice } from '@reduxjs/toolkit'
import { IOffersState } from './types'
import { fetchOffers } from './middleware/fetchOffers'

const initialState: IOffersState = {
    offers: []
}

const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchOffers.fulfilled, (state, action) => {
            state.offers = action.payload;
        })
    }
})

export const {

} = offersSlice.actions

export default offersSlice.reducer