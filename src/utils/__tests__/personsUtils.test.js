import { getPrincipalPerson, getPersonById } from '../personsUtils';

describe('Persons Utils', () => {
  describe('getPrincipalPerson', () => {
    it('should return the first position from an array of persons', () => {
      const mockId = Math.random();
      const mockPersons = [
        {
          id: mockId,
        },
        {
          id: Math.random(),
        },
      ];

      expect(getPrincipalPerson(mockPersons).id).toEqual(mockId);
    });

    it('should return an empty object from an empty array', () => {
      const mockPersons = [];

      expect(getPrincipalPerson(mockPersons)).toEqual({});
    });
  });

  describe('getPersonById', () => {
    it('should return a person by id from an array of persons', () => {
      const mockId = Math.random();
      const mockPersons = [
        {
          id: mockId,
        },
        {
          id: Math.random(),
        },
      ];

      expect(getPersonById(mockPersons, mockId)).toEqual({ id: mockId });
    });
  });
});
