// unknown
// 무엇이 들어올지 모를 때 지정 -> 오류 없이 어떤 값이든 저장할 수 있다.
// any와 다르다!
// any는 타입스크립트에서 아예 타입 확인 자체를 하지 않는다.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // 에러 발생 "unknown' 형식은 'string' 형식에 할당할 수 없습니다"
// unknown 타입의 값을 타입이 정해진 변수에 할당하기 위해서는 별도의 확인 작업이 필요하다.
if (typeof userInput === 'string') {
  userName = userInput;
}

// never
// 아래 함수는 절대 반환 값을 생성하지 않는다.
function generateError(m: string, c: number): never {
  throw { message: m, errorCode: c };
};
const result = generateError('에러발생', 500);
console.log(result)