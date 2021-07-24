<template>
  <div class="wrap">
    <img class="image" :src="image" />
    <a class="link" :href="link">{{ linkText }}</a>
    <h2 class="title">{{ title }}</h2>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    image: String,
    title: String,
    link: String,
    linkText: String,
    desc: String,
    enable: Number,
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  padding: 0 10px;
  padding-top: 30px;
  height: 70vh;

  .image {
    margin: 0 auto;
    width: auto;
    display: block;
    max-height: 40vh;
  }

  .link {
    color: #8a8a8a;
  }

  .title {
    margin-top: 30px;
    font-size: 2.5rem;
  }

  .desc {
    color: #5c6360;
  }
}
</style>
