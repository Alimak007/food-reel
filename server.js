// Start server
import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
})

connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {
    res.send("Hello world, I am alimak")
});