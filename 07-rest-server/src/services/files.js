const {
    getImagePath,
    cleanPreviousImage,
    cleanPreviousImageCloudinary,
    uploadFile,
    uploadFileCloudinary,
} = require('../utils');

const getImage = async (model, collection) => {
    const { img } = model;

    if (img) return getImagePath(img, collection);
};

const updateImage = async (model, files, collection) => {
    const { img } = model;

    if (img) cleanPreviousImage(img, collection);

    model.img = await uploadFile(files, undefined, collection);
    await model.save();
};

const updateImageCloudinary = async (model, files) => {
    const { img } = model;

    if (img) await cleanPreviousImageCloudinary(img);

    const { tempFilePath } = files.file;

    const { secure_url: secureUrl } = await uploadFileCloudinary(tempFilePath);

    model.img = secureUrl;
    await model.save();
};

module.exports = { getImage, updateImage, updateImageCloudinary };
