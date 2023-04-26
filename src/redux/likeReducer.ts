import { createSlice } from '@reduxjs/toolkit'

type likeProductsType = {
    [id: number]: boolean
}

export const initialState: likeProductsType = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
})

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer
