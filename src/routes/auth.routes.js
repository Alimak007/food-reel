import express from 'express';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

//User auth APIs
router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.get('/user/logout', authController.logoutUser);
router.get('/users', authController.getUser);

//Foodpartner auth APIs
router.post('/foodpartner/register', authController.registerFoodPartner);
router.post('/foodpartner/login', authController.loginFoodPartner);
router.get('/foodpartner/logout', authController.logoutFoodPartner);
router.get('/foodpartners', authController.getFoodPartner);

export default router;