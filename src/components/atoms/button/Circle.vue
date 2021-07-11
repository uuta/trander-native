<template>
  <button class="button_circle" @click="click">
    <img :src="icon" class="icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.button_circle {
  border-radius: 50%;
  -ms-flex-preferred-size: 16%;
  transition: color 0.3s, text-decoration 0.3s, background-color 0.3s;
  display: block;
  width: 60px;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
  text-align: center;
  background: #fff;
  filter: invert(20%) sepia(80%) saturate(519%) hue-rotate(202deg)
    brightness(144%) contrast(190%) drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.2));

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #3316f2;
    text-decoration-color: transparent;
  }

  .icon {
    filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 40%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    margin: auto;
  }
}
</style>
