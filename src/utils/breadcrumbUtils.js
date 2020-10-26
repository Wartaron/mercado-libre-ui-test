import { pathOr } from 'ramda';

export const getBreadcrumbConfig = (info) => {
  const categoryInfo = info.find((item) => item.id === 'category');
  const values = pathOr(
    [],
    ['path_from_root'],
    pathOr([], ['values'], categoryInfo)[0]
  );

  return values;
};
