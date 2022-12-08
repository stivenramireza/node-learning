const path = require('path');

const { cleanPreviousImage, uploadFile } = require('../utils');

const updateImage = async (model, files, collection) => {
    const { img } = model;

    if (img) cleanPreviousImage(img, collection);

    model.img = await uploadFile(files, undefined, collection);
    await model.save();
};

module.exports = { updateImage };
