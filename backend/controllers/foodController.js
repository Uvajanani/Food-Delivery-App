import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item

const addFood = async(req, res) => {
    if(!req.file) {
        return res.status(400).json({success : false, message : "Image upload failed."})
    }
    
    const image_filename = `${req.file.filename}`

    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
    })
    try {
        await food.save();
        res.json({success : true, message : "Food Added"})
    } catch(error) {
        console.log(error)
        res.status(500).json({success : false, message : "Error adding food item"})
    }
}

// all food list

const listFood = async(req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success : true, data : foods})
    } catch(error) {
        console.log(error)
        res.json({success : false, message : "error"})
    }
}

// remove food item

const removeFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        
        if(!food) {
            return res.status(404).json({success : false, message : "Food not found"})
        }
        
        fs.unlink(`uploads/${food.image}`, (err) => {
            if(err) {
                console.error("Error deleting image : ", err)
            }
        })

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success : true, message : "Food Removed"})
    } catch(error) {
        console.log(error)
        res.status(500).json({success : false, message : "Error removing food item."})
    }
}

export{addFood, listFood, removeFood}
