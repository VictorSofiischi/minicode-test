import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import insuranceSlice from './insurance/insuranceSlice'
import offersSlice from './offers/offersSlice'
import reviewsSlice from './reviews/reviewsSlice'

export const store = configureStore({
    reducer: {
        insurance: insuranceSlice,
        offers: offersSlice,
        reviews: reviewsSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
