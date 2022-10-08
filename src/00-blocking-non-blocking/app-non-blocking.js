const { getUserAsync } = require('./users/users');

console.log('Program starts');
console.time('start');

getUserAsync(1, (user) => {
    console.log('User 1:', user);
});

getUserAsync(2, (user) => {
    console.log('User 2:', user);
    console.timeEnd('start');
});

console.log('Program ends');
