"use strict";
// 클래스에서 받은 제네릭T를 인터페이스SStorage에서 사용한다
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        //API
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    //string을 보내주고 T를 받는다는 의미
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringStorage = new LocalStorage();
stringStorage.get("key");
stringStorage.set("hello", "bye");
// "xxx" string을 보내고 boolean을 받음
const booleanStorage = new LocalStorage();
booleanStorage.get("xxx");
booleanStorage.set("hello", true);
