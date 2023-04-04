import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './features/slices'


export const store = configureStore({
    reducer:{
        movies: movieReducer
    },
})