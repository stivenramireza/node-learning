const { uploadFile } = require('../utils');

const updateImage = async (model, files, collection) => {
    model.img = await uploadFile(files, undefined, collection);
    await model.save();
};

module.exports = { updateImage };
