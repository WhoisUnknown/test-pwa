import * as _ from './mutations-types';
export default {
  [_.SET_PAGE](state, page) {
    state.currentPage = page;
  },
};
