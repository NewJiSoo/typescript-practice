"use strict";
// type Player = {
//     readonly name: string,
//     age?: number
// }
// const personMaker = (name: string): Player => ({ name })
// const goo = personMaker("goo")
// goo.name = "Lee" // 에러
// const numbers: readonly number[] = [1, 2, 3, 4]
// numbers.push(4) // 에러
// 튜플은 배열을 생성할 수 있는데 최소한의 길이를 가져야 하고 특정 위치에 특정 타입이 있어야 한다.
// const foo:[string, number, boolean] = ["Lee", 12, false]
// foo[0] = 1 // 에러
// const foo: readonly [string, number, boolean] = ["Lee", 12, false]
// foo[2] = 2 // 에러
let z = undefined;
let x = null;
// 타입스크립트로부터 빠져나오고 싶을 때 사용한다
const h = [1, 2, 3, 4];
const g = true;
h + g; // 에러가 발생하지 않음
