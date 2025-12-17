import { Users } from "../models/user.model.js";
import { FoodPartner } from "../models/foodpartner.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;

    const isUserAlrradyExists = await Users.findOne({
        email
    });

    if (isUserAlrradyExists) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
        fullName,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const user = await Users.findOne({
        email
    });

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}

const logoutUser = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    });
}

const registerFoodPartner = async (req, res) => {
    const { name, email, password } = req.body;

    const isAccountAlreadyExists = await FoodPartner.findOne({
        email
    });

    if (isAccountAlreadyExists) {
        return res.status(400).json({
            message: "Food partner already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await FoodPartner.create({
        name,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "Food partner registered successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name,
        }
    });
}

const loginFoodPartner = async (req, res) => {
    const { email, password } = req.body;

    const foodPartner = await FoodPartner.findOne({
        email
    });

    if (!foodPartner) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    const ispasswordValid = await bcrypt.compare(password, foodPartner.password);

    if (!foodPartner || !ispasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message: "FoodPartner logged in successfully",
        foodPartner: {
            _id: foodPartner._id,
            name: foodPartner.name,
            email: foodPartner.email
        }
    })
}

const logoutFoodPartner = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    });
}

export default {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}