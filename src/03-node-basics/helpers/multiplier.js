const fs = require('fs');
require('colors');

class Table {
  constructor(base, multiplier, result) {
    this.base = base;
    this.multiplier = multiplier;
    this.result = result;
  }
}

const getTable = (base = 5, limit = 10) => {
  return new Promise((resolve, reject) => {
    try {
      let result = [];

      for (let i = 1; i <= limit; i++) {
        const table = new Table(base, i, base * i);
        result.push(table);
      }

      resolve(result);
    } catch (error) {
      reject(`Error to get table ${base}`);
    }
  });
};

const printTable = async (table, format = 'console') => {
  return new Promise((resolve, reject) => {
    if (!table?.length) return reject('Table does not exist');
    const { base } = table[0];

    console.log(
      `
    ==========================
            Table ${base}
    ==========================
    `.blue
    );

    if (format !== 'console') {
      console.table(table, ['base', 'multiplier', 'result']);
    } else {
      let out = '';
      for (const line of table) {
        out += `${line.base} ${'x'.blue} ${line.multiplier} ${'='.blue} ${
          line.base * line.multiplier
        }\n`;
      }
      console.log(out);
    }
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
    fs.writeFileSync(`./files/table-${base}.txt`, out);
    return `table-${base}.txt`;
  } catch (err) {
    return err; // throw err;
  }
};

module.exports = { getTable, saveFile, printTable };
