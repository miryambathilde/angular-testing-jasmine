import { Person } from './person.model';

fdescribe('Test for PersonModel', () => {

  describe('Test for person.getFullName', () => {

    it('should return an string with name + lastname', () => {
      // ARRANGE
      const person = new Person('Nicolas', 'Molina', 25);
      // ACT
      const rta = person.getFullName();
      // ASSERT
      expect(rta).toEqual('Nicolas-Molina');
    });

  });

  describe('Test for person.getAgeInYears', () => {

    it('should return 35 years', () => {
      // Arrange
      const person = new Person('Nicolas', 'Molina', 25);
      // Act
      const age = person.getAgeInYears(10);
      // Assert
      expect(age).toEqual(35);
    });

    it('should return 35 years', () => {
      const person = new Person('Nicolas', 'Molina', 20);
      const age = person.getAgeInYears(15);
      expect(age).toEqual(35);
    });

    it('should return 28 years with negative number', () => {
      const person = new Person('Nicolas', 'Molina', 28);
      const age = person.getAgeInYears(-10);
      expect(age).toEqual(28);
    });

  });
});
