import { configureStore } from "@reduxjs/toolkit";
import {cookUserInfoSlice} from './cookUserInfoSlice'
const store=configureStore({
    reducer:{
        cookUserInfoSlice,
    }
})
export default store;