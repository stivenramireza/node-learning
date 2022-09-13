const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want do do?',
    choices: [
      {
        name: `${'1.'.green} Create task`,
        value: '1',
      },
      {
        name: `${'2.'.green} List tasks`,
        value: '2',
      },
      {
        name: `${'3.'.green} List completed tasks`,
        value: '3',
      },
      {
        name: `${'4.'.green} List pending tasks`,
        value: '4',
      },
      {
        name: `${'5.'.green} Complete task(s)`,
        value: '5',
      },
      {
        name: `${'6.'.green} Delete task`,
        value: '6',
      },
      {
        name: `${'0.'.green} Exit`,
        value: '0',
      },
    ],
  },
];

const inquireMenu = async () => {
  // console.clear();

  console.log('========================'.green);
  console.log('   Select an option'.white);
  console.log('========================'.green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'[ENTER]'.green} to continue`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) return 'Please enter a value';
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

module.exports = { inquireMenu, pause, readInput };
