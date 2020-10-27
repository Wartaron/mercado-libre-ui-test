import { getTranslation } from '../translationsUtils';

describe('Translations Utils', () => {
  describe('getTranslation', () => {
    it('should return a text with matching context and value', () => {
      expect(getTranslation('title')).toEqual('Mercado Libre');
      expect(getTranslation('header', 'searchBarPlaceHolder')).toEqual(
        'Nunca dejes de buscar'
      );
    });
  });
});
