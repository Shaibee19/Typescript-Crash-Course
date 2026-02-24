// Basic Types

let age:number = 25
let hobby:string = "soccer"
let isAdult:boolean = true
let shoes: any = "nike"


// Arrays

let fruits:string[] = ["grapefruit", "apricot", "kiwi"]
let arr: any[] = [22, "hello", true, ["soccer", "basketball"]]
let numArr: number[][] = [[1], [2], [3]]


// Tuples - two values of different types

let employee: [string, number] = ["Louis", 38]
let employees: [string, number][] = [["Knala", 3], ["Echo", 1], ["Roux", 0]]


// Objects

let car: { brand: string, year: number } = {
    brand: "Volkswagen",
    year: 2013
}


// Custom Types - better way to define objects

type car = {
    brand: string,
    year: number
}

let myCar: car = {
    brand: "Volkswagen",
    year: 2013
}


// Interfaces - similar to custom types but can be extended

interface Car1 {
    brand: string,
    year: number
}

let newCar: Car1 = {
    brand: "Toyota",
    year: 2012
}


// Union Types - variable can be one of several types

let x: number | string = 123

type occupation = "teacher" | "engineer" | "artist"
let myOccupation: occupation = "engineer"


// Type Assertions - tell the compiler to treat a variable as a different type

let y: any = "this is a string"
y = <number> 22


// Functions

function add(a: number, b: number): number {
    return a + b
}

function greet(name: string): void {
    console.log(`Hello, ${name}!`)
}


// Generics - reusable components that can work with any data type

function copyArray<T>(arr: T[]): T[] { // T is a generic type parameter placeholder for any type
    return [...arr]
}

let numCopy = copyArray<number>([1, 2, 3])
let strCopy = copyArray<string>(["a", "b", "c"])


// Enums - a way to define a set of named constants

enum EyeColor {
    blue = "Rare eye color",
    green = "Very rare eye color",
    brown = "Common eye color"
}

interface Student {
    name: string,
    age: number,
    eyeColor: EyeColor
}

function displayStudent(student: Student): void {
    const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
    document.body.innerText = info
}

displayStudent({
    name: "Shai",
    age: 31,
    eyeColor: EyeColor.blue
})