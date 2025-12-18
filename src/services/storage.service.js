import Imagekit from 'imagekit'
import Config from '../config/envConfig.js';

const imagekit = new Imagekit({
    publicKey: Config.IMAGEKIT_PUBLIC_KEY,
    privateKey: Config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: Config.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = async (file, fileName) => {
    const result = await imagekit.upload({
        file: file, //required
        fileName: fileName //required
    });

    return result;
}

export default {
    uploadFile
}