<template>
  <div fluid>
    <h1
      v-if="codeTitle[error.statusCode]"
      class="mt-0">
      {{ codeTitle[error.statusCode] }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      На главную
    </NuxtLink>
    <a
      class="ml-2"
      href="javascript:window.location.reload(true)">
      Обновить
    </a>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      otherError: 'Произошла ошибка',
      codeTitle: {
        404: '404. Страница не найдена',
        403: '403. Отказано в доступе',
      },
    };
  },
  head() {
    const title =
      this.codeTitle[this.error.statusCode] || this.otherError;
    return {
      title: this.error?.title || title,
    };
  },
  methods: {
    reloadPage() {
      document.location.reload();
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
