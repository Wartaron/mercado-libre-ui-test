//vendors
import axios from 'axios';

//constants
import {
  GET_PRODUCTS_DATA_ERROR,
  GET_PRODUCTS_DATA_REQUEST,
  GET_PRODUCTS_DATA_SUCCESS,
  RESET_PRODUCTS_DATA,
} from '../constants/actions.constants.json';

//utils
import { buildUrl } from '../utils/callUtils';

export const getProductsCall = (params) => {
  return axios.get(buildUrl('search-products', { ...params, limit: 4 }));
};

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_DATA_REQUEST,
});

export const getProductsError = () => ({
  type: GET_PRODUCTS_DATA_ERROR,
});

export const resetProducts = () => ({
  type: RESET_PRODUCTS_DATA,
});

export const getProductsSucess = (data) => ({
  type: GET_PRODUCTS_DATA_SUCCESS,
  payload: data,
});

export const getProductsByQuery = (params) => (dispatch) => {
  dispatch(getProductsRequest());

  return getProductsCall(params)
    .then((response) => dispatch(getProductsSucess(response)))
    .catch(() => {
      dispatch(getProductsError());
    });
};
