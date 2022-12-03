const path = require('path');

const { v4: uuid } = require('uuid');

const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

const getFilename = (file) => {
    const cuttedName = file.name.split('.');
    const ext = cuttedName[cuttedName.length - 1];
    return { cuttedName, ext };
};

const uploadFile = (files, validExts = validExtensions, directory = '') => {
    return new Promise((resolve, reject) => {
        const { file } = files;

        const { _, ext } = getFilename(file);

        if (!validExts.includes(ext)) {
            reject(`Ext is not allowed - ${validExts}`);
        }

        const tmpName = uuid() + '.' + ext;
        const uploadPath = path.join(__dirname, '../../files/', directory, tmpName);

        file.mv(uploadPath, (err) => {
            if (err) reject(err);

            resolve(tmpName);
        });
    });
};

module.exports = { uploadFile };
