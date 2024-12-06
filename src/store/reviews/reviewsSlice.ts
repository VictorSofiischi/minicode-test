import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IReviewState } from './types'
import { fetchReviews } from './middleware/fetchReviews'

const initialState: IReviewState = {
    reviews: [],
    currentPage: 1
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        handleChangeCurrentPage(state, action: PayloadAction<{ page: number }>) {
            state.currentPage = action.payload.page;

            return state;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
        })
    }
})

export const {
    handleChangeCurrentPage
} = reviewsSlice.actions

export default reviewsSlice.reducer