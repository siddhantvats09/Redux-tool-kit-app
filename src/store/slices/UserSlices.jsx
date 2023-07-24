import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name : "user",
    initialState:[],
    reducers:{
        adduser(state,action){
            state.push(action.payload)
        },
        removeuser(state,action){
            state.splice(action.payload,1)
        },
        deleteallusers(state,action){
            return []
        },
    }
})

export const {adduser, removeuser,deleteallusers} =userSlice.actions;
export default userSlice.reducer ;