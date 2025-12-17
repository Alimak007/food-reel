import express from 'express';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

//User auth APIs
router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.post('/user/logout', authController.logoutUser);

//Foodpartner auth APIs
router.post('/foodpartner/register', authController.registerFoodPartner);
router.post('/foodpartner/login', authController.loginFoodPartner);
router.post('/foodpartner/logout', authController.logoutFoodPartner);

export default router;