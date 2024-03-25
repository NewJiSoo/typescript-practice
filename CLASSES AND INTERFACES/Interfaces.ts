// // type Team = "red" | "blue" | "yellow"

// // interface Person {
// //     nickname: string,
// //     health: number,
// //     team: Team
// // }

// // const park: Person = {
// //     nickname: "park",
// //     health: 10,
// //     team: "red"
// // }

// // // interface Hello = string // 잘못된 방법

// // // interface User {
// // //     name: string
// // // }

// // // interface Play extends User { }

// // // const yo: Play = {
// // //     name: "yoyo"
// // // }

// // // type User = {
// // //     name: string
// // // }

// // // type Play = User & {}

// // interface User {
// //     name: string
// // }
// // interface User {
// //     lastName: string
// // }
// // interface User {
// //     health: number
// // }
// // const jo: User = {
// //     name: "jo",
// //     lastName: "j",
// //     health: 20
// // }

// // 표준화된 클래스 청사진을 만들기위해 추상 클래스를 사용한다.
// interface User {
//     firstName: string,
//     lastName: string,
//     sayHi(name: string): string,
//     fullName(): string
// }
// interface Human {
//     health: number
// }
// class Player implements User, Human {
//     // 인터페이스로 상속할 때 프러피티는 private로 만들지 못한다
//     constructor(
//         // private firstName: string,
//         public firstName: string,
//         public lastName: string,
//         public health: number
//     ) { }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name: string) {
//         return `Hello ${name}. 내 이름은 ${this.fullName()}`
//     }
// }

// function makeUser(user: User) {
//     return `${user.firstName} ${user.lastName}`
// }

// makeUser({
//     firstName: "cd",
//     lastName: "d",
//     fullName: () => "z",
//     sayHi: (name) => "string"
// })