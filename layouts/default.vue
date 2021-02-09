<template>
  <div>
    <div>
      <nuxt-link
        class="reset-link"
        :to="{name:'index'}">
        Основная страница
      </nuxt-link>
      <nuxt-link
        class="reset-link"
        :to="{name:'products'}">
        Список товаров
      </nuxt-link>
      <nuxt-link
        class="reset-link"
        :to="{name:'pages-slug',params:{slug:'about-us'}}">
        About us
      </nuxt-link>
    </div>
    <div>
      <label for="select-theme">
        Выберите тему
      </label>
      <select
        id="select-theme"
        v-model="theme"
        name="select-theme">
        <option value="default">
          Стандартная
        </option>
        <option value="yandex">
          Yandex
        </option>
        <option value="mailru">
          Mail.ru
        </option>
        <option value="error-theme">
          Несуществующая тема
        </option>
      </select>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      theme: this.$cookies.get('theme') || 'default',
    };
  },
  watch: {
    theme: {
      handler(newVal) {
        this.$cookies.set('theme', newVal, {
          path: '/',
          maxAge: 60 * 60 * 24 * 365 * 5,
        });
        document.location.reload();
      },
    },
  },
};
</script>
