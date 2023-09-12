class Person {
  #id;
  constructor() {
    this.#id = Math.random();
  }
  get getID() {
    return Number (this.#id);
  }
}

module.exports = Person;
