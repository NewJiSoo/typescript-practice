// 제네릭을 사용하고 있다
type Player<E> = {
    name: string
    extraInfo: E
}
type LeeExtra = {
    favFood: string
}
type LeePlayer = Player<LeeExtra>

const Lee: LeePlayer = {
    name: "Lee",
    extraInfo: { favFood: "kimchi" }
}

const Kim: Player<null> = {
    name: "Kim",
    extraInfo: null
}

type Q = Array<number> // 내장된 Array 사용
let z: Q = [1, 2, 3, 4]

function printAllNumbers(arr: Array<number>) {

}