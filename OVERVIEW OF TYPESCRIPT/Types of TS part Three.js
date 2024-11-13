"use strict";
// 타입 확인을 통해 사용 가능
let i;
if (typeof i === "number") {
    let j = i + 1;
}
if (typeof i === "string") {
    let k = i.toUpperCase();
}
function hello() {
    console.log('x');
}
function bye(name) {
    if (typeof name === "string") {
        name; // string
    }
    else if (typeof name === "number") {
        name; // number
    }
    else {
        name; // never
    }
}
