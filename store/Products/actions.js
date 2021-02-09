import * as $ from './actions-types';
import * as _ from './mutations-types';

const listProducts = [
  {
    id: 1,
    name: 'Ванна чугунная Roca Malibu 170х75 см, без ручек 230960000',
    img: 'https://shop.roca.ru/media/catalog/product/cache/36/small_image/400x/163b81649b7ef7bc8a00b0066e59ae0a/m/i/mid_vanna-roca-malibu-170kh75-bez-ruchek-230960000-izdelie.webp',
    price: 60000,
  },
  {
    id: 2,
    name: 'Ванна чугунная Roca Malibu 170х70 см 2333G0000',
    img: 'https://shop.roca.ru/media/catalog/product/cache/36/small_image/400x/163b81649b7ef7bc8a00b0066e59ae0a/2/3/2333G0000_1.webp',
    price: 50000,
  },
];

export default {

  async [$.LOAD_PRODUCTS]({ getters, commit }, query) {
    commit(_.SET_LOADING_LIST, true);
    const res = {
      code: 200,
      data: listProducts,
    };
    if (res.code === 200) {
      commit(_.SET_PRODUCTS, res.data);
    }
    commit(_.SET_LOADING_LIST, false);
    return res;
  },

  async [$.LOAD_PRODUCT]({ getters, commit }, id) {
    const item = listProducts.find(i => i.id === +id);
    const res = {
      code: item ? 200 : 404,
      data: item,
    };
    if (res.code === 200) {
      commit(_.SET_PRODUCT, res.data);
    }
    return res;
  },
};
