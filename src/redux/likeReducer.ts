import { createSlice } from "@reduxjs/toolkit"

type likeProductsType = {
    [id:number] : boolean
}

export const initialState: likeProductsType = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
})


export default likeSlice.reducer