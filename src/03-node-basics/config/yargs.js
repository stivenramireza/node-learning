const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Enter the base number of the multiplier table',
    },
    l: {
      alias: 'list',
      type: 'boolean',
      default: false,
      describe: 'List the multiplier table',
    },
    f: {
      alias: 'format',
      type: 'string',
      choices: ['console', 'table'],
      default: 'console',
      describe: 'Show the multiplier table in a specific format',
    },
    u: {
      alias: 'until',
      type: 'number',
      default: 10,
      describe: 'Enter the limit number of the multiplier table',
    },
  })
  .check((argv) => {
    if (isNaN(argv.b)) throw 'Base must be a number';
    return true;
  }).argv;

module.exports = argv;
