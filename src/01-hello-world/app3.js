console.log('Program starts'); // 1

setTimeout(() => {
    console.log('First timeout'); // 5
}, 3000);

setTimeout(() => {
    console.log('Second timeout'); // 2
}, 0);

setTimeout(() => {
    console.log('Third timeout'); // 3
}, 0);

console.log('Program ends'); // 4 :: 2
