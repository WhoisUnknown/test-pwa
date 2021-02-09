<template>
  <div
    :class="{
      [$s.card]:true,
      [$ss.card]:true
    }">
    <div>
      Цена сверху: {{ productPrice }}
    </div>
    <div>
      Название: {{ item.name }}
    </div>
    <nuxt-link :to="{name:'products-id',params:{id:item.id}}">
      Перейти к товару
    </nuxt-link>
  </div>
</template>

<script>
import ProductCard from '../ProductCard';
export default {
  name: 'ProductCard',
  extends: ProductCard,
};
</script>

<style lang="scss" module="$ss">
.card{
  font-size:16px;
  padding:50px;
  border-radius: 100px;
}
</style>
