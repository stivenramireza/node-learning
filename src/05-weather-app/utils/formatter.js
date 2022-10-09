const capitalize = (sentence) => {
    const words = sentence.split(' ');
    upperWords = words.map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase());
    return upperWords.join(' ');
};

module.exports = { capitalize };
