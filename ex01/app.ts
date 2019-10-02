// types:
// strings
let myName = "Max";
// myName = 28;

//numbers
let myAge = 28;
// myAge = ""

// boolean
let myBool = true;
// myBool = 1;

// assign types?
let myRealAge;
myRealAge = 27;
myRealAge = "27";

let myTypedAge: number;
myTypedAge = 27;
// myTypedAge = "27";

// arrays
let hobbies: any[] = ["cooking", "sports"];
console.log(typeof hobbies);
hobbies = [100]

//tuples
let fake_address: [string, number] = ["superstreet", 99]
// let fake_address_failing: [string, number] = [99, "superstreet"]

// enums
enum Color { Green, Gray, Blue }
let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

function test(name: string): string {
    return name;
}
console.log(test("hello"));

// void
function sayHello(): void {
    console.log("Hello from void");
}
sayHello();

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

//functions as types
let myMultiply: (x: number, y: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 5));

// objects
let userData = {
    name: "Peter",
    age: 30
};

let userDataTyped: { name: string, age: number } = {
    name: "Peter",
    age: 30
};
// userData = {};

