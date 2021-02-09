import * as _ from './mutations-types';
export default {
  [_.SET_LOADING_LIST](state, payload) {
    state.loadingProducts = payload;
  },
  [_.SET_PRODUCTS](state, list) {
    state.products = list;
  },
  [_.SET_PRODUCT](state, item) {
    state.currentProduct = item;
  },
};
