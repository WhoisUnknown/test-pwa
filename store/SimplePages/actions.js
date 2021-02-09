import * as $ from './actions-types';
import * as _ from './mutations-types';

export default {

  async [$.LOAD_PAGE]({ getters, commit }, slug) {
    // make request to api with slug
    const res = {
      meta: {
        seo_title: slug,
        seo_description: slug + 'seo_description',
      },
      body: `<span style="color:green">${slug}</span>`,
    };
    commit(_.SET_PAGE, res);
    return { code: 200, data: res };
  },
};
