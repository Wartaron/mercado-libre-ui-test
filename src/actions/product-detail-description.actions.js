//vendors
import axios from 'axios';

//constants
import {
  GET_PRODUCT_DETAIL_DESC_DATA_ERROR,
  GET_PRODUCT_DETAIL_DESC_DATA_REQUEST,
  GET_PRODUCT_DETAIL_DESC_DATA_SUCCESS,
  RESET_PRODUCT_DETAIL_DESC_DATA,
} from '../constants/actions.constants.json';

//utils
import { buildUrl } from '../utils/callUtils';

export const getProductDetailDescCall = (params) => {
  return axios.get(buildUrl('product-detail-description', params));
};

export const getProductDetailDescRequest = () => ({
  type: GET_PRODUCT_DETAIL_DESC_DATA_REQUEST,
});

export const getProductDetailDescError = () => ({
  type: GET_PRODUCT_DETAIL_DESC_DATA_ERROR,
});

export const resetProducts = () => ({
  type: RESET_PRODUCT_DETAIL_DESC_DATA,
});

export const getProductDetailDescSucess = (data) => ({
  type: GET_PRODUCT_DETAIL_DESC_DATA_SUCCESS,
  payload: data,
});

export const getProductDetailDesc = (params) => (dispatch) => {
  dispatch(getProductDetailDescRequest());

  return getProductDetailDescCall(params)
    .then((response) => dispatch(getProductDetailDescSucess(response)))
    .catch(() => {
      dispatch(getProductDetailDescError());
    });
};
