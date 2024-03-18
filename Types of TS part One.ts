let q: number = 1
let w: string = "a"
let r: boolean[] = [true]

const person: {
    name: string,
    age?: number // 만약 나이 항목이 필수가 아닐 때(나이가 있을수도 있고 없을수도 있다)
} = {
    name: "Lee"
}


// if (person.age < 10) {
// }

// person.age가 undefind가 될수도 있기 때문에
// if문에 person.age가 없다면 에러 

if (person.age && person.age < 10) {

}

type Age = number;
type Person = {
    name: string,
    age?: Age
}

const personLee: Person = {
    name: "Lee"
}

const personKim: Person = {
    name: "Kim",
    age: 1
}

// function playerMaker(name: string) :Person {
//     return {
//         name: name,
//     }
// }

const playerMaker = (name: string): Person => ({ name })

const Yoo = playerMaker("Yoo")
Yoo.age = 12

