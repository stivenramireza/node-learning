const fs = require('fs');

class Table {
  constructor(base, multiplier, result) {
    this.base = base;
    this.multiplier = multiplier;
    this.result = result;
  }
}

const getTable = (base = 5) => {
  return new Promise((resolve, reject) => {
    try {
      let result = [];

      for (let i = 1; i <= 10; i++) {
        const table = new Table(base, i, base * i);
        result.push(table);
      }

      resolve(result);
    } catch (error) {
      reject(`Error to get table ${base}`);
    }
  });
};

const printTable = async (table) => {
  return new Promise((resolve, reject) => {
    if (!table?.length) return reject('Table does not exist');
    const { base } = table[0];

    console.log(`
    ==========================
            Table ${base}
    ==========================
    `);
    console.table(table, ['base', 'multiplier', 'result']);
  });
};

const saveFile = async (table) => {
  try {
    if (!table?.length) throw new Error('Table does not exist');

    const { base } = table[0];
    let out = '';

    for (const line of table) {
      out += `${line.base} x ${line.multiplier} = ${line.base * line.multiplier}\n`;
    }
    fs.writeFileSync(`table-${base}.txt`, out);
    return `table-${base}.txt`;
  } catch (err) {
    return err; // throw err;
  }
};

module.exports = { getTable, saveFile, printTable };
