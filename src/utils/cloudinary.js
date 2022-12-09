const { CLOUDINARY_URL } = require('./secrets');

const cloudinary = require('cloudinary').v2;
cloudinary.config(CLOUDINARY_URL);

const uploadFileCloudinary = async (filePath) => {
    return await cloudinary.uploader.upload(filePath);
};

const deleteFileFromCloudinary = async (publicId) => {
    await cloudinary.uploader.destroy(publicId);
};

module.exports = { uploadFileCloudinary, deleteFileFromCloudinary };
