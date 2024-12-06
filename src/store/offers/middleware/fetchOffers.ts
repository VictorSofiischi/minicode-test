import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { offersService } from '../offersService'

export const fetchOffers = createAsyncThunk(
    'offers/fetchOffers',
    async (_: undefined, thunkAPI) => {
        try {
            const response = await offersService.getOffers()

            console.log(response);

            return response
        } catch (err) {
            toast.error('Error during fetch offers')

            return thunkAPI.rejectWithValue((err as AxiosError).response?.data)
        }
    }
)