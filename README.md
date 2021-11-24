# AngularTesting

```
describe('test', () => {
  it('test for a sum', () => {
    expect(5 + 5).toEqual(10);
  });
});
```

```
export class Person {

  constructor(
   public name: string,
   public lastname: string,
   public age: number
  ) {}

  getFullName(): string {
   return `${this.name} ${this.lastname}`;
  }

  getAgeInYears( years: number ): number {
   return this.age + years;
  }
}
```

````
import { Person } from './person.model';

describe('Test for Person', () => {

  // Code
});
````


````
import { Person } from './person.model';

describe('Test for Person', () => {

  // Code
});
````

````
  describe('Test for person.getFullName', () => {

    it('should return an string with name + lastname', () => {
      const person = new Person('Nicolas', 'Molina', 24);
      expect(person.getFullName()).toEqual('Nicolas Molina');
    });

  });
````

````
  describe('Test for person.getAgeInYears', () => {

    // code

  });
````

````
it('should return 34 years', () => {
  const person = new Person('Nicolas', 'Molina', 24);
  const age = person.getAgeInYears(10);
  expect(age).toEqual(34);
});
````

````
it('should return 35 years', () => {
  const person = new Person('Nicolas', 'Molina', 20);
  const age = person.getAgeInYears(15);
  expect(age).toEqual(35);
});
````

````
it('should return 28 years with negative number', () => {
  const person = new Person('Nicolas', 'Molina', 28);
  const age = person.getAgeInYears(-10);
  expect(age).toEqual(28);
});
```

```
npm i karma-mocha-reporter --save-dev
```

```
getAgeInYears( years: number ): number{
  if( years > 0 ){ 
    return this.age + years;
  }
  return this.age;
}
```