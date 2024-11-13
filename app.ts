class Department {
  // name: string;

  constructor(public readonly name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(this.name);
  }

  addEmployee(employee: string) {

  }
}

const dname = new Department('이름');