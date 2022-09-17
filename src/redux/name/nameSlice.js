import { createSlice } from "@reduxjs/toolkit";

const nameSlice=createSlice({
    name:"name",
    initialState:{
        name:localStorage.getItem("nameTodo")?JSON.parse(localStorage.getItem("nameTodo")) :null
    },
    reducers:{
         handleName:(state,action)=>{
            localStorage.setItem("nameTodo",JSON.stringify( action.payload))
            state.name=action.payload
        }
    }
})

export const {handleName}=nameSlice.actions;
export default nameSlice.reducer;