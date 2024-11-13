// Partial
interface Goal {
  title: string;
  description: string;
}
function createGoal(title: string, description: string) {
  // 객체가 새로 생성된 후 그 이후에 값이 들어가면 속성이 없다는 경고가 뜬다.
  // let newGoal<Goal> = {};

  // Partial은 나중에 newGoal이 타입 Goal이 될 객체라고 알려준다.
  // 모든 속성이 옵션이 되는 객체 타입으로 바꿔준다.
  let newGoal: Partial<Goal> = {};
  newGoal.title = title;
  newGoal.description = description;

  return newGoal;
}


//Readonly
// 읽기전용 : 객체 속성을 바꾸거나 추가할 수 없도록 한다
const names: Readonly<string[]> = ['q', 'w']
// names.pop() // 에러
// names.push('e') // 에러


//  Record<K,T>
interface Page {
  title: string;
  age?: number;
}

type PageTitle = 'home' | 'about';

const newPage: Record<PageTitle, Page> = {
  about: { title: 'about', content: '내용' }, // Page에 없기 때문에 에러
  home: { title: 'home', age: 30 },
};


//Pick<T,K>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPick = Pick<Todo, 'title' | 'completed'>

const todo: TodoPick = {
  title: '책읽기',
  completed: false,
  // description:'책읽기 싫어' // Pick으로 지정하지 않았기 때문에 에러
}


//Omit<T,K>
type NewTodo = Omit<Todo, 'description'>
const todo2: NewTodo = {
  title: '공부하기',
  completed: false,
  // description:'공부하기 싫어' //Omit으로 제거했기 때문에 에러
}


//Exclude<T,U>
type T1 = Exclude<'a' | 'b' | 'c', 'a'>; // a을 제외한 타입구성 -> b, c
type T2 = Exclude<string | number | (() => void), Function>; // string, number
type T3 = Exclude<string | number | Function, number>; // string, Function