<template>
  <div :class="$s.main">
    Продукт с id: <b>{{ currentProduct.id }}</b>
    <div v-if="currentProduct.img">
      <img
        :src="currentProduct.img"
        style="max-width: 200px; max-height: 200px;"
        width="100%">
    </div>
    <div>
      Название: {{ currentProduct.name }}
    </div>
  </div>
</template>

<script>
import * as $ from '@/store/Products/actions-types.js';
import { mapState } from 'vuex';
export default {
  name: 'ProductsItemView',
  validate({ params }) {
    // Должен быть числом
    return /^\d+$/.test(params.id);
  },
  scrollToTop: true,
  async fetch({ store, params, error }) {
    const res = await store.dispatch('Products/' + $.LOAD_PRODUCT, params.id);
    if (res.code === 404) {
      error({ statusCode: res.code, title: 'Товар не найден' });
    }
  },
  head() {
    return {
      title: this.currentProduct.name,
    };
  },
  computed: {
    ...mapState('Products', [
      'currentProduct',
    ]),
  },
  watch: {
    '$route.params.id': {
      handler() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
  },
};
</script>

<style lang="scss" module="$s">
.main{
  margin: 30px 10px;
}
</style>
