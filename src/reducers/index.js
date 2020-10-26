import { combineReducers } from 'redux';
import productsReducer from './products.reducer';
import productDetailReducer from './product-detail.reducer';
import productDetailDescReducer from './product-detail-desc.reducer';

export default combineReducers({
  productsReducer,
  productDetailReducer,
  productDetailDescReducer,
});
