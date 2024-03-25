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

// let menuOption;

// do { // do while loop - run logic at least once and possibly again after
//     console.log('pick 1 to run, or 0 to quit');
//     menuOption = 0;
//     if (menuOption !== 0) {
//         // something
//     }
// } while (menuOption === 1);

// let myString = 'hello world';
// for (let i = 0; i < myString.length; i++) { // loop through characters in string
//     const charAtIndex = myString[i];
//     console.log(charAtIndex);
// }

// let str = 'my string';
// if (typeof str === 'string') console.log('its a string');

// console.log(str);
// str[1] = 'l'; // will not change string because strings are immutable. will need to reassign string
// console.log(str);
// console.log(str.length);

// let str = 'my string';
// // slice()
// let str1 = str.slice(1);
// let str2 = str.slice(1, 4);
// let str3 = str.slice(-3, -1);
// // substring()
// let str4 = str.substring(1);
// let str5 = str.substring(1, 4);
// // substr()
// let str6 = str.substr(1);
// let str7 = str.substr(2, 2);
// console.log(`str1: ${str1}\nstr2: ${str2}\nstr3: ${str3}\nstr4: ${str4}\nstr5: ${str5}\nstr6: ${str6}\nstr7: ${str7}\n`);

// let str = 'This is a string as an example for this';
// let str1 = str.toUpperCase(); // toUppercase
// let str2 = str.toLowerCase(); // toLowercase
// let str3 = str.replace('this', 'hello'); // replace 1st instance of 'this'
// let str4 = str.replaceAll('this', 'hello'); // replace all instances of 'this'
// let index1 = str2.indexOf('this');
// let index2 = str2.lastIndexOf('this');
// console.log(`str1: ${str1}\nstr2: ${str2}\nstr3: ${str3}\nstr4: ${str4}\nindex1: ${index1}\nindex2: ${index2}\n`);

// let str1 = 'hello';
// let str2 = 'something';
// if (str1 < str2) { // letter sooner in alphabet is lower 
//     console.log('the word hello comes before something in the dictionary because h is less than s');
// }
// let str3 = 'aA';
// console.log(`char code a: ${str3.charCodeAt(0)}, char code A: ${str3.charCodeAt(1)}`);
// console.log(str1.charAt(1)); // e

let str = 'abcdefg';
let str2 = 'abcfgh';
function isInOrder(str) {
    for (let i = 0; i < str.length - 1; i++) {
        const current = str[i];
        const next = str[i + 1];
        if (current.charCodeAt(0) + 1 !== next.charCodeAt(0)) {
            return false;
        }
    }
    return true;
}
console.log(isInOrder(str)); // true
console.log(isInOrder(str2)); // false