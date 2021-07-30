<template>
  <button class="button_cancel" type="button">
    {{ text }}
  </button>
</template>

<script>
/**
 * 参照
 * https://stackoverflow.com/questions/40149152/vue-button-on-click-submits-a-form
 */
export default {
  props: {
    text: { type: String, required: true },
  },
  methods: {
    click(e) {
      this.$emit("cancel", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.button_cancel {
  background: #b1bab6;
  color: #fff;
  width: 100%;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}
</style>
