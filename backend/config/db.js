import mongoose from "mongoose"
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://uvajanani:012318@cluster0.iu313.mongodb.net/food-delivery').then(() => console.log("DB Connected"))
} 