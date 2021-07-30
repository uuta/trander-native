<template>
  <button class="button_submit">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
  },
};
</script>
<style lang="scss" scoped>
.button_submit {
  background: #dedede;
  color: #fff;
  width: 100%;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}
</style>
