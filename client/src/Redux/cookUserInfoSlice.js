import { createSlice} from "@reduxjs/toolkit";
const initialState={
  userCookDatas:{
    Title: "", 
    Locations: "", 
    Gender: "" 
  }
};
export const cookUserInfoSlice=createSlice({
  name:'service',
  initialState,
  reducers:{
    addTitle: (state, action) => {
      const { val } = action.payload;
      state.userCookDatas=null;
      state.userCookDatas.Title=val;
    },
    addLocation: (state, action) => {
      const { val } = action.payload;
      state.userCookDatas.Location=val;
    },
  }
})
export const {addTitle,addLocation}=cookUserInfoSlice.actions;
export default cookUserInfoSlice.reducer;