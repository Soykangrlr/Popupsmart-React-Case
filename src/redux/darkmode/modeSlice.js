import { createSlice } from "@reduxjs/toolkit";

const modeSlice=createSlice({
    name:"mode",
    initialState:{
        darkMode:localStorage.getItem("darkmode")?JSON.parse(localStorage.getItem("darkmode")) :false
    },
    reducers:{
        handleMode:(state,action)=>{
            localStorage.setItem("darkmode",JSON.stringify( action.payload))
            state.darkMode=action.payload
        }
    }
})

export const {handleMode}=modeSlice.actions;
export default modeSlice.reducer;