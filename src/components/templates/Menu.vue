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
          <!-- <ion-select interface="action-sheet" color="light" :value="directionType" @select="directionType"> -->
          <!-- <ion-select interface="action-sheet" color="light" :value="directionType"  v-model="directionType" :ionChange="setDirectionType(DIRECTION_TYPE.NUM)"> -->
          <ion-select interface="action-sheet" color="light" :value="directionType"  v-model="directionType">
            <ion-select-option v-for="DIRECTION_TYPE in DIRECTION_TYPES" :key="DIRECTION_TYPE.NUM" :value="DIRECTION_TYPE.NUM" :ionChange="setDirectionType(DIRECTION_TYPE.NUM)">{{ DIRECTION_TYPE.TEXT }}</ion-select-option>
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
      <Logout></Logout>
    </ion-content>
  </ion-menu>
</template>

<script>
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
import Logout from "@/components/organisms/menus/Logout.vue";
import { mapState } from "vuex";
import { DIRECTION_TYPES } from '@/const/external'

export default {
  setup() {
    return {
      close,
      compass,
      airplaneSharp,
      location,
      card,
      exit,
      RangeSlide,
      Logout,
      DIRECTION_TYPES
    };
  },
  computed: {
    ...mapState({
      directionType: (state) => state.external.directionType,
    }),
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
      const states = {
        distance: this.range,
        directionType: this.directionType,
      };
      const params = {
        min: this.range[0],
        max: this.range[1],
        directionType: this.directionType,
      };
      this.$store.dispatch("external/setSetting", {states, params});
    },
    setDirectionType(directionType) {
      this.$store.dispatch('external/setDirectionType', directionType)
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
