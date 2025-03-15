import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProduct=createAsyncThunk("product/fetch",async(id)=>{
    const {data}=await axios.get(`http://127.0.0.1:8000/api/product/${id}`)
    console.log(data)
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