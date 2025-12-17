import { JsonWebTokenError } from "jsonwebtoken";
import jwt from 'jsonwebtoken'
import { FoodPartner } from "../models/foodpartner.model";

const authFoodPartnerMiddleware = async (res, req, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await FoodPartner.findById(decoded.id);

        req.foodPartner = foodPartner;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}