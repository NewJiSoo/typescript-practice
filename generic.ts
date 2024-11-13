// 오브젝트 + 제네릭
function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b)
}

const mergeA = merge({ name: 'q', hobbies: ['sports'] }, { age: 30 })
console.log(mergeA)


// 속성에 타입 지정
interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let des = '고';
  if (element.length === 1) {
    des = '고고';
  } else if (element.length > 1) {
    des = '고' + element.length + 'el'
  }
  return [element, des]
}

console.log(countAndPrint('hi'));
console.log(countAndPrint(['?????', '!!!!']));


// 오브젝트의 키 타입 지정하기
function extractAndConvert<T extends object, U extends keyof T>(a: T, key: U) {
  return '오브젝트 ' + a[key];
}

extractAndConvert({ name: 'kim' }, 'name');
// extractAndConvert({name:'kim'}, 'age'); // 에러(오브젝트에 키가 없기 때문에)