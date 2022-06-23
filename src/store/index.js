// import configurate store
import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covidSlice";
import provReducer from "../features/province";

/**
 * buat store : state global
 * menyimpan berabgai slice reducer
 */
const store = configureStore({
    reducer :{  
        covid: covidReducer,
        prop: provReducer
    },
});

// export store
export default store;