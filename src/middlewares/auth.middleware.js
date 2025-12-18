import jwt from 'jsonwebtoken'
import { FoodPartner } from "../models/foodpartner.model.js";
import Config from '../config/envConfig.js';
import { Users } from '../models/user.model.js';

const authFoodPartnerMiddleware = async (req, res, next) => {
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

const authUserMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        });
    }

    try {
        const decoded = jwt.verify(token, Config.JWT_SECRET);
        const user = await Users.findById(decoded.id);

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

export default {
    authFoodPartnerMiddleware,
    authUserMiddleware
}