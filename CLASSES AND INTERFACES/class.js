"use strict";
// // 추상 클래스
// abstract class User {
//     constructor(
//         private firstName: string,
//         protected lastName: string,
//         public nickname: string
//     ) { }
//     abstract getNickName(): void
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// class Player extends User {
//     getNickName() {
//         console.log(this.nickname)
//         console.log(this.lastName)
//     }
// }
// const lee = new Player("Lee", "las", "리")
// lee.nickname
// lee.getNickName()
// // lee.lastName // 인스턴스로 접근 불가능!!
// // lee.getFullName() // 에러
