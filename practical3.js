// Implement following features of ECMASCRIPT 6.
//  The let keyword
//  The const keyword
//  Arrow Functions
//  The (Spread Of) ... Operator
//  For/of
//  Map Objects
//  Set Objects
//  Classes
//  Promises
//  Symbol
//  Default Parameters
//  Function Rest Parameter

let N = 22;
if (true) {
    let N = 23;
    console.log(N);
}
console.log(N);
const PI = 3.14;
console.log(PI);

var multiply = (a, b) => a * b;
console.log(multiply(10, 20));

const spread1 = [29, 30];
const spread2 = [...spread1, 31, 32];
console.log(spread2);

const arr = [22, 23, 24, 25, 26];
for (const i of arr) {
    console.log(i);
}

var map = new Map();
map.set("name", "Nilang");
map.set("age", "19");
console.log(map.get("name"));
console.log(map.get("age"));

var set = new Set();
set.add(22);
set.add(23);
set.add(24);
console.log(set);

class per_info {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log('My name is ${this.name} and my age is ${this.age}');
    }
}

var m2 = new per_info("Nilang", 19);
m2.introduce();

function fetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [22, 23, 24, 425];
            if (data.length > 0) {
                resolve(data);
            } else {
                reject("Data is not available");
            }
        }, 6000);
    });
}

fetch()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


var symbol = Symbol("Hii");
var object = {
    [symbol]: "Good morning!",
};
console.log(object[symbol]);

function person(name = "Nilang") {
    console.log(`Hello, ${name}!`);
}
person();
person("Dave");

function add(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(add(22, 23, 24, 25)); 
