import dotenv from 'dotenv';

dotenv.config({
    // path: '.env'
})

const Config = {
    JWT_SECRET : process.env.JWT_SECRET,
    DB_URI : process.env.DB_URI,
    IMAGEKIT_PUBLIC_KEY : process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY : process.env.IMAGEKIT_Private_KEY,
    IMAGEKIT_URL_ENDPOINT : process.env.IMAGEKIT_URL_ENDPOINT
}

export default Config