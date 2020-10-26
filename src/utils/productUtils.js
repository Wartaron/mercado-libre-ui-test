import { isEmpty, pathOr } from 'ramda';

export const getStateOfProduct = (product) => {
  let state = '';

  if (!isEmpty(product)) {
    const attributes = pathOr([], ['attributes'], product);

    state = attributes.find((attr, index) => attr.id === 'ITEM_CONDITION')
      .value_name;
  }

  return state;
};

export const getFirstImage = (product) => {
  let imageUrl = '#';

  if (!isEmpty(product)) {
    const pictures = pathOr([], ['pictures'], product);

    imageUrl = pathOr('#', ['secure_url'], pictures[0]);
  }

  return imageUrl;
};

export const getSoldQuantity = (product) => {
  let soldQuantity = '0';

  if (!isEmpty(product)) {
    soldQuantity = pathOr('0', ['sold_quantity'], product);
  }

  return soldQuantity;
};

export const getTitle = (product) => {
  let title = '';

  if (!isEmpty(product)) {
    title = pathOr('', ['title'], product);
  }

  return title;
};

export const getPrice = (product) => {
  let price = '0';

  if (!isEmpty(product)) {
    price = pathOr('', ['price'], product);
  }

  return price;
};
