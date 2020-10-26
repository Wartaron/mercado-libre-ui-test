export const getSearchParams = (searchString) => {
  let searchParams;

  const mapParams = (param) => {
    if (param.includes('=')) {
      const paramArray = param.split('=');

      return { [paramArray[0]]: paramArray[1] };
    }
  };

  if (!!searchString) {
    searchParams = searchString.substring(1).split('&').map(mapParams);
  }

  return searchParams.reduce((params, param) => ({ ...params, ...param }), {});
};
