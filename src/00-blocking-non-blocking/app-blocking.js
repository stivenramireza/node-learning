const { getUserSync } = require("./users/users");

console.log("Program starts");
console.time("start");

const user1 = getUserSync(1);
console.log("User 1:", user1);

const user2 = getUserSync(2);
console.log("User 2:", user2);

console.log("Program ends");
console.timeEnd("start");
