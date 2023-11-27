class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};