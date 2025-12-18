// Create food items
import express from 'express';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js';
import foodItemRoutes from './routes/fooditem.routes.js';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(cookieParser());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/food', foodItemRoutes);

export default app;