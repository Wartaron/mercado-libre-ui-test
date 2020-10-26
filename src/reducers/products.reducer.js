import {
  GET_PRODUCTS_DATA_ERROR,
  GET_PRODUCTS_DATA_REQUEST,
  GET_PRODUCTS_DATA_SUCCESS,
  RESET_PRODUCTS_DATA,
} from '../constants/actions.constants.json';

const initialState = {
  success: false,
  loading: false,
  data: [],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  let nextState = { ...state };

  switch (action.type) {
    case GET_PRODUCTS_DATA_REQUEST:
      nextState.loading = true;
      nextState.error = false;
      nextState.success = false;
      break;

    case GET_PRODUCTS_DATA_ERROR:
      nextState.loading = false;
      nextState.error = true;
      nextState.success = false;
      break;

    case GET_PRODUCTS_DATA_SUCCESS:
      nextState.loading = false;
      nextState.error = false;
      nextState.success = true;
      nextState.data = action.payload.data;
      break;

    case RESET_PRODUCTS_DATA:
      nextState = initialState;
      break;
  }

  return nextState;
};

export default productsReducer;
