// {
//   name:string;
//   age:number;
//   hobbies: string[]
//   튜플은 배열의 타입을 정확히 명시할 수 있다.
//   role: [number,string]
// }

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
  name: 's',
  age: 30,
  hobbies: ['sports', 'cooking'],
  // role: [2, 'author'],
  role: Role.ADMIN
}

// person.role.push('admin')

let fav: any;
fav = ['sports']

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log(true)
}