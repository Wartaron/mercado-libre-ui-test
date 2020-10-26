const baseApiCall = 'https://api.mercadolibre.com';

const endpointsApiCall = {
  'search-products': 'sites/MLA/search',
  'search-just-product': 'items',
};

//Function to query params
export const buildUrlArguments = (params) =>
  Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');

export const buildUrl = (endpointKey, params = {}) => {
  const unusedParams = { ...params };

  //Used to know if has some url param in the api call
  //the rest is used like a query param
  const fillParam = (part) => {
    if (part.startsWith(':')) {
      const key = part.substring(1);
      delete unusedParams[key];
      return params[key];
    } else {
      return part;
    }
  };

  const { endpoint } = endpointsApiCall[endpointKey];
  if (!endpoint) return '#';

  let url =
    baseApiCall +
    '/' +
    endpoint
      .split('/')
      .map(fillParam)
      .filter((undefinedItems) => !!undefinedItems)
      .join('/');

  if (Object.values(unusedParams).length) {
    url += `?${buildUrlArguments(unusedParams)}`;
  }
  return url;
};
