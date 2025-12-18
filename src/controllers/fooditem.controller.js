import { FoodItems } from "../models/fooditem.model.js";
import storageService from "../services/storage.service.js";
import { v4 as uuid } from 'uuid';

const createFoodItem = async (req, res) => {
    // console.log(req.foodPartner);
    // console.log(req.body);
    // console.log(req.file);

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    
    const foodItem = await FoodItems.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id,
    })

    res.status(201).json({
        message: "Food item added successfully",
        food: foodItem
    })
}

const getFoodItems = async (req, res) => {
    const foodItems = await FoodItems.find({});

    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

export default {
    createFoodItem,
    getFoodItems
}