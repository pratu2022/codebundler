import { Course } from "../models/Course.js"

export const catchAsyncError = (passedFunction)=>(req,res,next)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next)
}