"use strict";
// Basic Types
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
let hobby = "soccer";
let isAdult = true;
let shoes = "nike";
// Arrays
let fruits = ["grapefruit", "apricot", "kiwi"];
let arr = [22, "hello", true, ["soccer", "basketball"]];
let numArr = [[1], [2], [3]];
// Tuples - two values of different types
let employee = ["Louis", 38];
let employees = [["Knala", 3], ["Echo", 1], ["Roux", 0]];
// Objects
let car = {
    brand: "Volkswagen",
    year: 2013
};
let myCar = {
    brand: "Volkswagen",
    year: 2013
};
let newCar = {
    brand: "Toyota",
    year: 2012
};
// Union Types - variable can be one of several types
let x = 123;
let myOccupation = "engineer";
// Type Assertions - tell the compiler to treat a variable as a different type
let y = "this is a string";
y = 22;
// Functions
function add(a, b) {
    return a + b;
}
function greet(name) {
    console.log(`Hello, ${name}!`);
}
// Generics - reusable components that can work with any data type
function copyArray(arr) {
    return [...arr];
}
let numCopy = copyArray([1, 2, 3]);
let strCopy = copyArray(["a", "b", "c"]);
// Enums - a way to define a set of named constants
var EyeColor;
(function (EyeColor) {
    EyeColor["blue"] = "Rare eye color";
    EyeColor["green"] = "Very rare eye color";
    EyeColor["brown"] = "Common eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Shai",
    age: 31,
    eyeColor: EyeColor.blue
});
//# sourceMappingURL=index.js.map