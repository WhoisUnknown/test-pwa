<template>
  <div :class="$s.card">
    <div>
      {{ item.name }}
    </div>
    <div>
      Цена снизу: {{ productPrice }} ₽
    </div>
    <nuxt-link :to="{name:'products-id',params:{id:item.id}}">
      Перейти к товару
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productPrice() {
      return this.item.price;
    },
  },
};
</script>

<style lang="scss" module="$s">
.card{
  border: 1px solid #00000042;
  border-radius: 5px;
  background: #fff;
  margin: 10px;
  padding: 15px;
  max-width: 260px;
  font-size: 14px;
}
</style>
