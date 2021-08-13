<template>
  <vue-slider
    ref="slider"
    v-model="handleRange"
    :enable-cross="false"
    :dotSize="20"
    :railStyle="{
      height: '8px',
      border: 'none',
      background: '#fff',
    }"
    :dotStyle="{
      backgroundColor: '#1CACBF',
      borderShadow: '#1CACBF',
      boxShadow: '#1CACBF',
    }"
    :processStyle="{ backgroundColor: '#1CACBF' }"
    :tooltipStyle="{
      backgroundColor: '#1CACBF',
      borderColor: '#1CACBF',
      borderShadow: '#1CACBF',
    }"
  />
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
  props: {
    range: { type: Array, required: false },
  },
  components: {
    VueSlider,
  },
  computed: {
    handleRange: {
      get() {
        return this.range;
      },
      set(range) {
        this.$emit("change", range);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.vue-slider-dot-handle:after) {
  font-size: 40px;
  text-shadow: 3px 2px 6px #999999;
}
</style>
