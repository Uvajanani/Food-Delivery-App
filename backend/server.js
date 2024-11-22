import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = 4000

// different web pages - admin, frontend
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174']

// middleware
app.use(express.json())
app.use(cors({
    origin : (origin, callback) => {
        if(!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new error(`Origin ${origin} not allowed by CORS`))
        }
    },
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    credentials : true
}))

// db connnection
connectDB();


// api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

// HTTP Method
app.get("/", (req, res) => {
    res.send("API Working")
})

// Listen 
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
