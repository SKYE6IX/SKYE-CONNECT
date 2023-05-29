import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary,
    params: async () => {
        return {
            folder: "SKYE-CONNECTv2",
            allowedFormats: ["jpeg", "jpg", "png"],
        };
    },
});

export default cloudinaryStorage;
