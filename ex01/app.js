"use strict";
// types:
// strings
var myName = "Max";
// myName = 28;
//numbers
var myAge = 28;
// myAge = ""
// boolean
var myBool = true;
// myBool = 1;
// assign types?
var myRealAge;
myRealAge = 27;
myRealAge = "27";
var myTypedAge;
myTypedAge = 27;
// myTypedAge = "27";
// arrays
var hobbies = ["cooking", "sports"];
console.log(typeof hobbies);
hobbies = [100];
//tuples
var fake_address = ["superstreet", 99];
// let fake_address_failing: [string, number] = [99, "superstreet"]
// enums
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Gray"] = 1] = "Gray";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function test(name) {
    return name;
}
console.log(test("hello"));
// void
function sayHello() {
    console.log("Hello from void");
}
sayHello();
function multiply(value1, value2) {
    return value1 * value2;
}
//functions as types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 5));
// objects
var userData = {
    name: "Peter",
    age: 30
};
var userDataTyped = {
    name: "Peter",
    age: 30
};
// userData = {};
