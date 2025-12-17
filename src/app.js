// Create food items
import express from 'express';
import cookieParser from "cookie-parser";
import router from './routes/auth.routes.js';
import foodRoutes from './routes/auth.routes.js'

const app = express();
app.use(cookieParser());

app.use(express.json());

app.use('/api/auth', router);
app.use('/api/food', foodRoutes);

export default app;