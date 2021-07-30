<template>
  <button class="button_submit" @click="click">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
  },
  methods: {
    click(e) {
      this.$emit("submit", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.button_submit {
  background: #3316f2;
  color: #fff;
  width: 100%;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3));
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #5743ef;
    text-decoration-color: transparent;
  }
}
</style>
