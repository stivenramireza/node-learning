const argv = require('./config/yargs');
require('colors');

const { getTable, printTable, saveFile } = require('./helpers/multiplier');

const main = async () => {
    console.clear();

    // Manual CLI
    // const [, , arg3 = 'base=5'] = process.argv;
    // const [, base = 5] = arg3.split('=');
    // const base = Number(base);

    // Automatic CLI
    const { b: base, u: limit, l: list } = argv;

    // // Create a text file with the multiplier table
    const table = await getTable(base, limit).catch((err) => console.error(err.red));

    if (list) {
        printTable(table, argv.f).catch((err) => console.error(err.red));
    }

    saveFile(table)
        .then((filename) => console.log(`${filename} has been created successfully`.green))
        .catch((err) => console.error(err.red));
};

main();
