import express from 'express';
import fooditemController from '../controllers/fooditem.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import multer from 'multer'

const router = express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
});


// /api/food
router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single("video"), fooditemController.createFoodItem)

export default router