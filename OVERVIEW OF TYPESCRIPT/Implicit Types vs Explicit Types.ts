// 암시적 유형과 명시적 유형

let a = "hello" // a의 타입을 추론 -> string
a = "bye" // string
// a = 1 // 에러, 타입이 number가 되어 에러가 발생한다

let b: boolean = true
// b = "x" // 에러

let c = [1, 2, 3, 4] // number
// c.push("1") // 에러, string을 number배열에 넣으려고 했기 때문에

let d: number[] = []

const player = {
    name: "doo"
}
// player.name = 1 // 에러
// player.hello() // 에러