import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// login user
export const loginUser = async(req, res) => {
    const {email, password} = req.body
    try {
        
        // Check if the user exist
        const user = await userModel.findOne({email})
        if(!user) {
            return res.json({success : false, message : "User doesn't exist"})
        }

        // Check if the password match with the existing password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.json({success : false, message : "Invalid credentials"})
        }

        const token = createToken(user._id)
        res.json({success : true, token})
    }
    catch(error) {
        console.log(error)
        res.json({success : false, message : "Error"})
    }
}


// register user
export const registerUser = async(req, res) => {
    const {name, password, email} = req.body;
    try {
        
        // checking if user already exists
        const exists = await userModel.findOne({email})
        if(exists) {
            return res.json({success : false, message : "User already exists"})
        }
        
        // validating email format 
        if(!validator.isEmail(email)) {
            return res.json({success : false, message : "Please enter a valid email"})
        }

        // checking if it is strong password or not
        if(password.length < 8) {
            return res.json({success : false, message : "Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user
        const newUser = new userModel({
            name : name,
            email : email,
            password : hashedPassword
        })

        // save the user
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success : true, token})
    } 
    catch(error) {
        console.log(error);
        res.json({succes : false, message : "Error"})
    }
}