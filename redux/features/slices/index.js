import { movieApi } from "@/redux/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trending: []
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        getTrending : (state,action)=>{
            state.trending = action.payload
        }
    }
})

export const { getTrending } = movieSlice.actions;


export const getAllTrending = () => async(dispatch) =>{
    const data = await movieApi.fetchTending(dispatch);
    dispatch(getTrending(data))
}


export default movieSlice.reducer;