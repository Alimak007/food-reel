// Start server
import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
})

import app from './src/app.js';
import connectDB from "./src/db/db.js";
import Config from './src/config/envConfig.js';

connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {
    res.send("Hello world, I am alimak")
});