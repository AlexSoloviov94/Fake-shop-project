import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import cartReduser from './cartReduser'

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: cartReduser,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
