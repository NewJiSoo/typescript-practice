// Storage는 이미 정의되어 있는데
// 타입스크립트에 의해 이미 선언된
// 자바스크립트의 웹 스토리지 API를 위한 인터페이스이다.
// 따라서 같은 이름을 사용하면 overide된다
interface SStorage<T> {
    [key: string]: T
}
// 클래스에서 받은 제네릭T를 인터페이스SStorage에서 사용한다
class LocalStorage<T>{
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        //API
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key]
    }
    //string을 보내주고 T를 받는다는 의미
    get(key: string): T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("key")
stringStorage.set("hello", "bye")

// "xxx" string을 보내고 boolean을 받음
const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("xxx")
booleanStorage.set("hello", true)