
class HardWorker {
  constructor() {
    this._name = '';
    this._age = 1;
    this._salary = 100;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge >= 1 && newAge < 100) {
      this._age = newAge;
    }
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary) {
    if (newSalary >= 100 && newSalary < 10000) {
      this._salary = newSalary;
    }
  }

  toObject() {
    return {
      name: this._name,
      age: this._age,
      salary: this._salary
    };
  }
}
