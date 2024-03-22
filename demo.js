let a = [ 1, 2, 3, 4 ];

// for (let i = 0; i < a.length; i++) { // loop through array length
//     const current = a[i];
//     console.log(current);
// }

// for (let i = 0; i < a.length - 1; i++) { // loop through first 3 indices
//     const current = a[i];
//     const next = a[i] + 1;
//     console.log(current);
//     console.log(next);
// }

// for (let x of a) { // for of loop, when index is not important
//     console.log(x);
// }

// let obj = {name: 'Jacob', age: 31};

// obj.age;
// obj['age'];

// const v = 'age';
// obj[v]

// for (let key in obj) { // for in loop, to loop over keys in objects
//     console.log(key);
//     console.log(obj['age']);
// }

// let target = 100;
// let start = 4;

// while (start < target) { // while [a condition is true] loop, for when a certain stop is necessary
//     console.log(start);
//     start += 10;
// }
// console.log(start);

let menuOption;

do { // do while loop - run logic at least once and possibly again after
    console.log('pick 1 to run, or 0 to quit');
    menuOption = 0;
    if (menuOption !== 0) {
        // something
    }
} while (menuOption === 1);