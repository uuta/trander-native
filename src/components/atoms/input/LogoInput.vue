<template>
  <div class="input_wrap">
    <div class="icon_wrap">
      <img :src="icon" class="icon">
    </div>
    <input
      class="text_input"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: true },
    icon: { type: String, required: true },
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.input_wrap {
  position: relative;
  margin-bottom: 20px;

  .icon_wrap {
    position: absolute;
    border-radius: 50%;
    -ms-flex-preferred-size: 16%;
    width: 60px;
    height: 60px;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
    background: #fff;
    z-index: 99;

    .icon {
      filter: invert(20%) sepia(80%) saturate(519%) hue-rotate(202deg) brightness(144%) contrast(190%) drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
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

  .text_input {
    filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.1));
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    width: 100%;
    margin: 10px 0;
    font-size: 1.2rem;
    color: #8a8a8a;
    font-weight: bold;
    padding-left: 70px;
  }
}
</style>
