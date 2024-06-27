import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://fathima:fathi@cluster0.nsyw3mt.mongodb.net/food-del').then(()=>console.log("DB connected"));
}