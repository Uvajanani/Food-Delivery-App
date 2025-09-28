import mongoose from "mongoose"
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://uvajanani:RonMhv1eLSHWIbDj@food-delivery-app.3cav9pl.mongodb.net/?retryWrites=true&w=majority&appName=Food-Delivery-App').then(() => console.log("DB Connected"))
} 