const items = [[1], [2]];
// const clone = [...items];
// console.log(clone);

// clone[0][0] = 'Hello'
// console.log(clone);
console.log(items);


const obj = { x: 1, y: 2 };
const obj2 = { z: 3 };
const newobj = { ...obj, ...obj2 }

console.log(newobj);
console.log({ ...obj, k: 4 });

const arr = [1, 2, 3, 4, 5]
function sum(a, b) {
  return a + b
}
console.log(sum(...arr))

const game = {
  name: '롤',
  info: {
    price: 1
  }
};

const clone = { ...game };
clone.name = '마크';
clone.info.price = 5;
console.log(game);
console.log(clone);

const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}