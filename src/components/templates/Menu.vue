<template>
  <ion-menu
    content-id="main"
    side="end"
    swipe-gesture="false"
    class="full"
    type="push"
  >
    <ion-header class="ion-no-border nml shadow">
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-menu-button @click="closeMenu">
            <ion-icon :icon="close"></ion-icon>
          </ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item color="light" lines="none" mode="ios">
          <ion-icon
            :icon="compass"
            slot="start"
            class="ion-align-self-center"
            color="secondary"
          ></ion-icon>
          <ion-label class="label_title">Direction</ion-label>
          <ion-select interface="action-sheet" color="light">
            <ion-select-option value="">All around</ion-select-option>
            <ion-select-option value="north">To North</ion-select-option>
            <ion-select-option value="east">To East</ion-select-option>
            <ion-select-option value="west">To West</ion-select-option>
            <ion-select-option value="south">To South</ion-select-option>
          </ion-select></ion-item
        >
      </ion-list>
      <ion-list>
        <ion-item color="light" lines="none" mode="ios"
          ><ion-icon
            :icon="airplaneSharp"
            slot="start"
            color="medium"
          ></ion-icon>
          <ion-label class="label_title">Mode</ion-label
          ><span class="disabled">Search around you</span></ion-item
        >
      </ion-list>
      <ion-list>
        <ion-item color="light" lines="none" mode="ios"
          ><ion-icon :icon="location" slot="start" color="medium"></ion-icon>
          <ion-label class="label_title">Nationality</ion-label
          ><span class="disabled">All countries</span></ion-item
        >
      </ion-list>
      <RangeSlide v-model:range="range"></RangeSlide>
      <ion-list>
        <ion-item color="light" lines="none" mode="ios"
          ><ion-icon :icon="card" slot="start" color="medium"></ion-icon>
          <ion-label class="label_title">Pricing</ion-label
          ><span class="disabled">FREE</span></ion-item
        >
      </ion-list>
      <ion-list>
        <ion-item color="light" lines="none" mode="ios" button="true"
          ><ion-icon :icon="exit" slot="start" color="danger"></ion-icon>
          <ion-label class="label_title">Logout</ion-label></ion-item
        >
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import {
  close,
  compass,
  airplaneSharp,
  location,
  card,
  exit,
} from "ionicons/icons";
import { menuController } from "@ionic/vue";
import RangeSlide from "@/components/molecules/slider/RangeSlide.vue";

export default {
  data() {
    return {};
  },
  setup() {
    return {
      close,
      compass,
      airplaneSharp,
      location,
      card,
      exit,
      RangeSlide,
    };
  },
  computed: {
    range: {
      get() {
        return Array.from(this.$store.state.external.rangeOfDistance);
      },
      set(range) {
        this.$store.commit("external/setRangeOfDistance", range);
      },
    },
  },
  methods: {
    closeMenu() {
      menuController.enable(true, "end");
      menuController.close("end");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.disabled) {
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
</style>
