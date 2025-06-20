import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://prashantraj01122:5BH3LxpKP4tnVcXn@food-delivery-db.41tdlvk.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}

