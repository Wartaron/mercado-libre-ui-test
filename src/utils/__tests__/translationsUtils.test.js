import { getTranslation } from '../translationsUtils';

describe('Translations Utils', () => {
  describe('getTranslation', () => {
    it('should return a text with matching context and value', () => {
      expect(getTranslation('title')).toEqual('Rule of Thumb.');
      expect(getTranslation('header', 'menuOption1')).toEqual('Past Trials');
    });
  });
});
