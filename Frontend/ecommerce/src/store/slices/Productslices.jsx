import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import ApiHelper from "../../services/ApiHelper";

export const fetchProducts=createAsyncThunk("products/fetch",async()=>{
   const apiConfig={
    method:'get',
    url:'/products'
   }
   const data=await ApiHelper.call(apiConfig)
   return data
   
})

const productSlice=createSlice({
    name:"products",   
    initialState: {products:[],loading:false,error:null},
    reducers:{},
    extraReducers: (builder)=>{
        builder 
          .addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
          })
          .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false,
            state.products=action.payload
          })
          .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.error.message;
          })

    }
})

export default productSlice.reducer;







// import axios from "axios";
// import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL ,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from "../constants/productsConstants";


// export const listProduts=()=>async (dispatch)=>{
//     try{

//         dispatch({type: PRODUCT_LIST_REQUEST})
//         const {data}=await axios.get("/api/products")

//         dispatch({type:PRODUCT_LIST_SUCCESS, payload:data})
//     }
//     catch(error){
//         dispatch({
//             type:PRODUCT_LIST_FAIL,
//             payload: error.response && error.response.data.detail ? error.response.data.detail
//             : error.message
//         })
//     }
// }



















// import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from "../constants/productsConstants";


// export const ProductListReducers=(state={products:[]},action)=>{
//     switch(action.type){
//         case PRODUCT_DETAILS_REQUEST:
//             return {loading:true,products:[]}
//         case PRODUCT_DETAILS_SUCCESS:
//             return {loading:false,products:action.payload}
//         case PRODUCT_DETAILS_FAIL:
//             return {loading:false,error:action.payload}
        
//         default:
//             return state
//     }
// }