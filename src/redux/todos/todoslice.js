import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getTodoAsync = createAsyncThunk('todos/getTodoAsync', async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE}`)
    return res.data
})
export const postTodoAsync = createAsyncThunk('todos/postTodoAsync', async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE}`, { "content": data })
    return res.data
})
export const deleteTodoAsync = createAsyncThunk('todos/deleteTododAsync', async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_BASE}/${id}`)
    return id
})
export const completedTodoAsync = createAsyncThunk('todos/completedTodoAsync', async ({ id, data }) => {

    const res = await axios.put(`${process.env.REACT_APP_API_BASE}/${id}`, { "isCompleted": data.completed })
    console.log(res.data);
    return res.data
})


const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        filter: "all",
        getLoading:false,
        postLoading:false,
        deleteLoading:false,
        updateLoading:false,
        error:null,
        page:1,
        slice:0
    },
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
        handleError:(state,action)=>{
            state.error=action.payload
        },
        handlePage:(state,action)=>{
            state.page=state.page+action.payload
        },
        handleSlice:(state,action)=>{
            state.slice=state.slice+action.payload
        }
    },
    extraReducers: {
        // Get
        [getTodoAsync.pending]:(state)=>{
            state.getLoading=true
          },
        [getTodoAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.getLoading=false
        },
        [getTodoAsync.rejected]: (state, action) => {
            console.log(action.error.message);
            state.getLoading=false
        },
        //POST
        [postTodoAsync.pending]: (state) => {
            state.postLoading=true
        },
        [postTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.postLoading=false
        },
        //Delete
        [deleteTodoAsync.pending]: (state,action) => {
            state.deleteLoading=true
           
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            const id = action.payload
            const index = state.items.findIndex(item => item.id === id)
            state.items.splice(index, 1)
            state.deleteLoading=false
        },
        //UPDATE
        [completedTodoAsync.pending]: (state,action) => {
            state.updateLoading=true
           
        },
        [completedTodoAsync.fulfilled]: (state, action) => {
            const { id, isCompleted } = action.payload
            const index = state.items.findIndex(item => item.id === id)
            state.items[index].isCompleted = isCompleted
            state.updateLoading=false
        },
    }

})
export const {
    changeFilter,
    handleError,
    handlePage,handleSlice
} = todoSlice.actions;
export default todoSlice.reducer;