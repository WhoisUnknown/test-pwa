<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="mt-2">
    <div v-if="currentPage">
      <div
        class="w100"
        v-html="currentPage.body" />
    </div>
  </div>
</template>

<script>
import * as $ from '@/store/SimplePages/actions-types.js';
import { mapState } from 'vuex';
export default {
  name: 'SimplePagesItemView',
  scrollToTop: true,
  async fetch({ store, params, error }) {
    const res = await store.dispatch('SimplePages/' + $.LOAD_PAGE, params.slug);
    if (res.code !== 200) {
      error({ statusCode: res.code });
    }
  },
  head() {
    const page = this.currentPage || {};
    return {
      title: page?.meta.seo_title || '',
      meta: [
        { hid: 'description', name: 'description', content: page?.meta.seo_description || '' },
        { hid: 'keywords', name: 'keywords', content: page?.meta.seo_keywords || '' },
      ],
    };
  },
  computed: {
    ...mapState('SimplePages', [
      'currentPage',
    ]),
  },
  watch: {
    '$route.params.slug': {
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
