import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product } from 'utils/productsArray'
import axios from 'axios'

const initialState: Product[] = []

export const fetchProducts = createAsyncThunk<Product[], undefined>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/fb1bd504-43dc-4517-894a-3e4f563af542'
        )
        return response.data.products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export default productsSlice.reducer
