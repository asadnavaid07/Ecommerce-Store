import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiHelper from "../../services/ApiHelper";


export const signup=createAsyncThunk('auth/signup',async(userData)=>{
    const apiConfig={
        method:"post",
        url:"/users/register/"
    }
        const {data}=await ApiHelper.call(apiConfig,userData)
        return data

})


const signupSlice=createSlice({
    name:'Signup',
    initialState:{
        loading:false,
        error:null,
        user:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signup.pending,(state)=>{
            state.loading=true,
            state.error=null

        })
        .addCase(signup.fulfilled,(state,action)=>{
            state.loading=false,
            state.error=null,
            state.user=action.payload

        })
        .addCase(signup.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
        })
    }

})

export default signupSlice.reducer;


































// export const signup=(fname,lname,email,password)=>async(dispatch)=>{
//    try{

//     dispatch(signupRequest())
//     const config={
//         header:{
//             'Content-type':'application/json'
//         }
//     }
//     const {data}=await axios.post('http://127.0.0.1:8000/api/users/register/',
//         {'fname':fname,
//         'lname':lname,
//         'email':email,
//         'password':password
//         },config
//     )
//     dispatch(signupSuccess(data))
//     return data
//    }
//    catch(error){
//     dispatch(signupFailure(error.response?.data?.message || "Signup Failed"))
//     throw error;

//    }
   
// }

// const signupSlice=createSlice({
//     name:'signup',
//     intialstate:{
//         loading:false,
//         error:null,
//         user:null
//     },




// })


export const { signupRequest, signupSuccess, signupFailure } =
  signupSlice.actions;