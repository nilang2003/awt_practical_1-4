// Create an array of numbers and perform the following operations: 
// => Find the length of the array. 
// => Access and display specific elements using indexing. 
// =>Use array methods like push() ,pop(), shift(), unshift(), join(), 
// delete(),concate(),flat(),splice() and slice() to modify the array. 
// Create an object representing a person with properties like name, age, and 
// gender. Implement a function that displays the person's details.

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("The length of the array is: " + a.length);//prints the length of the array
console.log("The value of the array at index 4 is: " + a[4]);//prints the specific value

a.push(11);
console.log("The elements are: " + a);//this will add the element at the end

a.pop();
console.log("The remaining elements are: " + a);//this will remove the end element

a.shift();
console.log("The shifted elements are: " + a); //this will shift towards left

a.unshift(0, 1);
console.log("The unshifted elements are: " + a); //adds the 2 new elements to the begining of the array

console.log("The joined elements are: " + a.join('|')); //this will replace the , with |

delete a[0]
console.log("The remaining elements are: " + a);//this will remove the specified index element

var b = [11, 12, 13, 14, 15]
console.log("The elements are: " + a.concat(b));//this will add elements of b at the end

const num = [['1', '2'], ['3', '4', ['5', ['6'], '7']]];
const flatnums = num.flat(Infinity);
console.log(flatnums);//this will remove the nestings in the array

a.splice(2, 0, 24, 26);
console.log("The elements are: " + a);//this will change the values at specified index

console.log("The selected elements are: " + a.slice(1, 5));//this will select a portion from the array

const person = {Name:"Nilang", age:18, gender:"Male", institute:"CSPIT", department:"CE"};
function print_person(){
    console.log(person.Name);
    console.log(person.age);
    console.log(person.gender);
    console.log(person.institute);
    console.log(person.department);
}

print_person();
