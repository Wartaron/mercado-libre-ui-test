//vendors
import { pathOr } from 'ramda';

//constants
import es from '../translations/es.json';

export const getTranslation = (context, value) => {
  const values = pathOr('###', [context], es);

  return pathOr(values, [value], values);
};
