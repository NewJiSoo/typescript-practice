"use strict";
// type SuperPrint = {
//     // 타입을 명확히 알고 있을 때 아래와 같은 방법을 사용할 수 있다.
//     (arr: number[]): void
//     (arr: boolean[]): void
//     (arr: string[]): string
//     // 만약 위의 시그니처를 섞고 싶으면?
//     // 혹은 타입을 모를 때는?
//     (arr: (string | boolean)[]): void // 이 방법은 일일이 만들어야 하기 때문에 비추
//     <T>(arr: T[]): void // 이 방법을 더 많이 사용한다.
//     // 이때 T, R 등등 이름은 아무거나 사용해도 상관없다
//     <Tomato>(arr: Tomato[]): void
//     <Tomato>(arr: Tomato[]): Tomato
// }
// const superPringt: SuperPrint = (arr) => {
//     arr.forEach(i => console.log(i))
// }
// const superPringt: SuperPrint = (arr) => arr[0]
// superPringt([1, 2, 3, 4])
// superPringt([true, false])
// const b = superPringt(["true", "false"])
// const a = superPringt(["true", true, 1]) // 섞어보자
// 매개변수의 타입을 전부 다르게 설정해서 출력하고 싶을때는?
// type SuperPrint = <T, M>(a: T[], b: M) => T
// const SuperPrint: SuperPrint = (arr, q) => arr[1]
// const a = SuperPrint(["true", true, 1], "zz")
function superPrint(a, M) {
    return a[0];
}
const a = superPrint([1, 2, 3], "a");
const b = superPrint([1, 2, 3], 3);
