import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provSlice = createSlice({
    name: "Covid Provinse Slice", // nama slice
    initialState: { 
        prov: data.provinces,
    },
    reducers: { 
        // membuat reducer: untuk update state
        addProvCovid(state, action) {
            const {kota,status,jumlah} = action.payload
            const index = state.prov.findIndex((item)=>item.kota === kota);

            state.prov[index][status] = jumlah
        }
    },
        
});


const provReducer = provSlice.reducer;
const { addProvCovid } = provSlice.actions;

export default provReducer;
export {addProvCovid};