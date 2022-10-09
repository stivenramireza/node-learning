const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want do do?',
        choices: [
            {
                name: `${'1.'.green} Search city`,
                value: 1,
            },
            {
                name: `${'2.'.green} List historical search`,
                value: 2,
            },
            {
                name: `${'0.'.green} Exit`,
                value: 0,
            },
        ],
    },
];

const inquireMenu = async () => {
    console.clear();

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

const listTasksToDelete = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.green;
        return {
            value: task.id,
            name: `${idx} ${task.description}`,
        };
    });

    choices.unshift({
        value: '0',
        name: `${'0'.green} Cancel`,
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices,
        },
    ];

    const { id } = await inquirer.prompt(questions);
    return id;
};

const confirmDeletion = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        },
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
};

const showChecklist = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.green;
        return {
            value: task.id,
            name: `${idx} ${task.description}`,
            checked: task.completedAt ? true : false,
        };
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices,
        },
    ];

    const { ids } = await inquirer.prompt(question);
    return ids;
};

module.exports = {
    inquireMenu,
    pause,
    readInput,
    listTasksToDelete,
    confirmDeletion,
    showChecklist,
};
