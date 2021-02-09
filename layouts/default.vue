<template>
  <div>
    <div>
      <nuxt-link :to="{name:'pages-slug',params:{slug:'about-us'}}">
        About us
      </nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>
