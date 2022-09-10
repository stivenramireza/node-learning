const { getTable, printTable, saveFile } = require('./helpers/multiplier');

const main = async () => {
  console.clear();

  const base = 3;

  const table = await getTable(base).catch((err) => console.error(err));

  printTable(table).catch((err) => console.error(err));

  saveFile(table)
    .then((filename) => console.log(`${filename} has been created successfully`))
    .catch((err) => console.error(err));
};

main();
