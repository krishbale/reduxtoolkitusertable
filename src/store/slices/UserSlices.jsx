import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsersImport } from "../action";
 const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
            console.log(action.payload);

        }, 
        removeUser(state,action){
            // console.log("hii "+action.payload)
            // state.slice(action.payload,2)
            state.splice(action.payload,1)
        },
        deleteUsers(state,action){
        // console.log("clear all users")

            return [];
        },

    },
    // extraReducers(builder){
    //     builder.addCase(clearAllUsersImport, () => {
    //         return [];
    //     })
    // }
 })
//  console.log(userSlice.actions);
 export  default  userSlice.reducer;
 export  const { addUser,removeUser,deleteUsers} = userSlice.actions;