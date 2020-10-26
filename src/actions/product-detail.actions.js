//vendors
import axios from 'axios';

//constants
import {
  GET_PRODUCT_DETAIL_DATA_ERROR,
  GET_PRODUCT_DETAIL_DATA_REQUEST,
  GET_PRODUCT_DETAIL_DATA_SUCCESS,
  RESET_PRODUCT_DETAIL_DATA,
} from '../constants/actions.constants.json';

//utils
import { buildUrl } from '../utils/callUtils';

export const getProductDetailCall = (params) => {
  return axios.get(buildUrl('product-detail', params));
};

export const getProductDetailRequest = () => ({
  type: GET_PRODUCT_DETAIL_DATA_REQUEST,
});

export const getProductDetailError = () => ({
  type: GET_PRODUCT_DETAIL_DATA_ERROR,
});

export const resetProducts = () => ({
  type: RESET_PRODUCT_DETAIL_DATA,
});

export const getProductDetailSucess = (data) => ({
  type: GET_PRODUCT_DETAIL_DATA_SUCCESS,
  payload: data,
});

export const getProductDetail = (params) => (dispatch) => {
  dispatch(getProductDetailRequest());

  return getProductDetailCall(params)
    .then((response) => dispatch(getProductDetailSucess(response)))
    .catch(() => {
      dispatch(getProductDetailError());
    });
};
