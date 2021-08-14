<template>
  <ion-item color="light" lines="none" mode="ios">
    <ion-icon :icon="scale" slot="start" color="secondary"></ion-icon>
    <ion-label class="label_title">Range</ion-label>
    <span class="disabled">{{ handleRange[0] }}km - {{ handleRange[1] }}km</span>
  </ion-item>
  <div class="item_wrap">
    <SlideBar v-model="handleRange"></SlideBar>
  </div>
</template>

<script>
import { scale } from "ionicons/icons";
import SlideBar from "@/components/atoms/slider/SlideBar.vue";

export default {
  setup() {
    return {
      scale,
      SlideBar,
    };
  },
  props: {
    range: { type: Array, required: true },
  },
  computed: {
    handleRange: {
      get() {
        return this.range;
      },
      set(range) {
        this.$emit("update:range", range);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.disabled {
  color: #8a8a8a;
}
ion-item {
  --min-height: 70px;
}
.label_title {
  font-size: 1.5rem;
  font-weight: bold;
}
::v-deep(.item-inner) {
  border: none;
}
.item_wrap {
  padding: 0 40px;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 0.3px solid #e7e7e7;
}
</style>
