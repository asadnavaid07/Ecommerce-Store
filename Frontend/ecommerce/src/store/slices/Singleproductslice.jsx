import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import ApiHelper from "../../services/ApiHelper";


export const fetchProduct=createAsyncThunk("product/fetch",async(id)=>{
  const apiConfig={
    method:'get',
    url:`/product/${id}`
  }
    const data=await ApiHelper.call(apiConfig)
    return data
    
})

const singleProdcutSlice=createSlice({
    name:"product",
    initialState:{product:null,loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state)=>{
            state.loading=true;
          })
          .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading=false,
            state.product=action.payload
          })
          .addCase(fetchProduct.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.error.message;
          })

    }
})


export default singleProdcutSlice.reducer;