import { createSlice } from "@reduxjs/toolkit";


const covidSlice = createSlice({
    name : "Covid Slice",
    initialState:{
        covid:[],
    },
    reducers:{
        updateCovid(state, action) {
            state.covid = action.payload;
        },
    },
});
const covidReducer = covidSlice.reducer;
const {updateCovid} = covidSlice.actions;

export default covidReducer;
export {updateCovid};