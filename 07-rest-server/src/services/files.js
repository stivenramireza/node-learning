const getFilename = (file) => {
    const cuttedName = file.name.split('.');
    const ext = cuttedName[cuttedName.length - 1];
    return { cuttedName, ext };
};

module.exports = { getFilename };
