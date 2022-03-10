<template>
  <div>
    <p>{{ defaultText }}</p>
    <div class="text-xl">Sample Text</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
};
</script>

<style scoped></style>
