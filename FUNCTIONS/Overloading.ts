// type Add = {
//     (a: number, b: number): number
//     (a: number, b: string): number
// }

// const add: Add = (a, b) => {
//     if (typeof b === 'string') return a
//     return a + b
// }

// type Add = {
//     (a: number, b: number): number
//     (a: number, b: number, c: number): number
// }

// const add: Add = (a, b, c?: number) => {
//     if (c) return a + b + c
//     return a + b
// }