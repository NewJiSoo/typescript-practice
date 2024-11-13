"use strict";
// 원시 타입
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const cbresult = combine(30, 36);
console.log(cbresult);
const cbName = combine('ㅋㅋ', 'ㅎㅎ');
console.log(cbName);
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// 함수타입
let combineValue;
combineValue = add;
console.log(combineValue(8, 8));
combineValue = printResult;
console.log(combineValue(8, 8)); // 잘못된 매개변수를 넣어도 에러가 발생하지 않는다.
let combineValue2; // 이런식으로도 함수 타입 지정 가능하다
// 매개 변수로 두개의 숫자가 오고 숫자를 반환한다.
// combineValue2 = printResult(8, 8); // 에러 발생
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
