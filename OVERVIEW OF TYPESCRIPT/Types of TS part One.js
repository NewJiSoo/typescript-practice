"use strict";
let q = 1;
let w = "a";
let r = [true];
const person = {
    name: "Lee"
};
// if (person.age < 10) {
// }
// person.age가 undefind가 될수도 있기 때문에
// if문에 person.age가 없다면 에러 
if (person.age && person.age < 10) {
}
const personLee = {
    name: "Lee"
};
const personKim = {
    name: "Kim",
    age: 1
};
// function playerMaker(name: string) :Person {
//     return {
//         name: name,
//     }
// }
const playerMaker = (name) => ({ name });
const Yoo = playerMaker("Yoo");
Yoo.age = 12;
