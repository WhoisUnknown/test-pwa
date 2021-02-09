<template>
  <div>
    <div class="w100">
      <div
        v-if="products.length">
        <component
          :is="$themeConfig.components.card==='default' ? 'ProductCard' : 'SecondCard'"
          v-for="product in products"
          :key="product.id"
          :item="product">
          {{ product }}
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import * as $ from '@/store/Products/actions-types.js';
import { mapState, mapActions } from 'vuex';
import ProductCard from '@cp/AppComponents/ProductCard';
export default {
  name: 'ProductsListView',
  components: {
    ProductCard,
    SecondCard: () => import('@cp/AppComponents/SecondCard'),
  },
  scrollToTop: true,
  fetch({ store, query }) {
    return store.dispatch('Products/' + $.LOAD_PRODUCTS, query);
  },
  head: {
    title: 'Ассортимент',
  },
  computed: {
    ...mapState('Products', [
      'products',
      'loadingProducts',
    ]),
  },
  methods: {
    ...mapActions('Products', [
      $.LOAD_PRODUCTS,
    ]),
  },
};
</script>
