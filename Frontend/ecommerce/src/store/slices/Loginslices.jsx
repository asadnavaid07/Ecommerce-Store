import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiHelper from "../../services/ApiHelper";

export const login = createAsyncThunk(
  "auth/login",
  async (userData) => {
      const requestData = {
        username: userData.email,
        password: userData.password,
      };

      const apiConfig = {
        method: "post",
        url: "/users/login",
      };

      const {data} = await ApiHelper.call(apiConfig, requestData);


      return data; 
 
    })



const loginSlice=createSlice({
    name:'login',
    initialState:{
        loading:false,
        error:null,
        user:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.loading=true,
            state.error=null

        })
        .addCase(login.fulfilled,(state,action)=>{
            state.loading=false,
            state.error=null,
            state.user=action.payload

        })
        .addCase(login.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
        })
    }

})

export default loginSlice.reducer;























