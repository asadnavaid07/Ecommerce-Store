import axios from "axios";

const BASE_URL="http://127.0.0.1:8000/api"

const getHeader=(file=false)=>{
    let headers = {
        "Content-Type": file ? "multipart/form-data" : "application/json",
        Accept: "application/json",
      };
    return headers
}

const call=async(api,data=null,file=false)=>{
    const headers=getHeader(file)

    try{
        const validMethods=['get','post']
        if(!validMethods.includes(api.method.toLowerCase())){
            throw new Error(`INVALID API METHOD${api.method}`)
        }
        const response=await axios({
            method:api.method,
            url:`${BASE_URL}${api.url}`,
            data,headers
        })
        return response.data

    }
    catch (error) {
        console.error("API Call Error:", error);
    

        if (error.response) {
            return {
                success: false,
                status: error.response.status,
                message: error.response.data?.message || "An error occurred",
            };
        } else if (error.request) {
            return { success: false, message: "No response from server" };
        } else {
            return { success: false, message: error.message };
        }
    }
    };
    
    
export default {
    call,
  };