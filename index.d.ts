declare let age: number;
declare let hobby: string;
declare let isAdult: boolean;
declare let shoes: any;
declare let fruits: string[];
declare let arr: any[];
declare let numArr: number[][];
declare let employee: [string, number];
declare let employees: [string, number][];
declare let car: {
    brand: string;
    year: number;
};
type car = {
    brand: string;
    year: number;
};
declare let myCar: car;
interface Car1 {
    brand: string;
    year: number;
}
declare let newCar: Car1;
declare let x: number | string;
type occupation = "teacher" | "engineer" | "artist";
declare let myOccupation: occupation;
declare let y: any;
declare function add(a: number, b: number): number;
declare function greet(name: string): void;
declare function copyArray<T>(arr: T[]): T[];
declare let numCopy: number[];
declare let strCopy: string[];
declare enum EyeColor {
    blue = "Rare eye color",
    green = "Very rare eye color",
    brown = "Common eye color"
}
interface Student {
    name: string;
    age?: number;
    eyeColor: EyeColor;
}
declare function displayStudent(student: Student): void;
//# sourceMappingURL=index.d.ts.map