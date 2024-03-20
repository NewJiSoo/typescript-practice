type Team = "red" | "blue" | "yellow"

interface Person {
    nickname: string,
    health: number,
    team: Team
}

const park: Person = {
    nickname: "park",
    health: 10,
    team: "red"
}

// interface Hello = string // 잘못된 방법

// interface User {
//     name: string
// }

// interface Play extends User { }

// const yo: Play = {
//     name: "yoyo"
// }

// type User = {
//     name: string
// }

// type Play = User & {}

interface User {
    name: string
}
interface User {
    lastName: string
}
interface User {
    health: number
}
const jo: User = {
    name: "jo",
    lastName: "j",
    health: 20
}