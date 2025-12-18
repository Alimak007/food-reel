import { FoodItems } from "../models/fooditem.model.js";

const createFoodItem = async (req, res) => {
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);
    res.send("Food item created");
}

export default {
    createFoodItem
}