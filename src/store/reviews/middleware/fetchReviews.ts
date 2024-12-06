import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { reviewsService } from '../reviewsService'

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (_: undefined, thunkAPI) => {
        try {
            const response = await reviewsService.getReviews()

            console.log(response);

            return response
        } catch (err) {
            toast.error('Error during fetch offers')

            return thunkAPI.rejectWithValue((err as AxiosError).response?.data)
        }
    }
)