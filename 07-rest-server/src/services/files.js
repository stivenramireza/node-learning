const { getImagePath, cleanPreviousImage, uploadFile } = require('../utils');

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

module.exports = { getImage, updateImage };
