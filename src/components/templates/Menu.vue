<template>
  <ion-menu content-id="main" side="end" class="full">
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
        <ion-item color="light">
          <ion-icon :icon="compass" slot="start" class="ion-align-self-center" color="primary"></ion-icon>
          <ion-label position="floating">Direction</ion-label>
          <ion-select>
            <ion-select-option value="">All around</ion-select-option>
            <ion-select-option value="north">To North</ion-select-option>
            <ion-select-option value="east">To East</ion-select-option>
            <ion-select-option value="west">To West</ion-select-option>
            <ion-select-option value="south">To South</ion-select-option>
          </ion-select></ion-item
        >
      </ion-list>
      <div class="c-box">
        <div class="wrap">
          <title-desc title="Search Scope" desc="aaaaaaaaa"></title-desc>
          <div class="content">
            <vue-slider
              ref="slider"
              v-model="range"
              :enable-cross="false"
              :dotSize="20"
              :railStyle="{
                height: '8px',
                border: '1px solid #6e5ce8',
                background: '#fff',
              }"
              :dotStyle="{
                backgroundColor: '#3316F2',
                borderShadow: '#3316F2',
                boxShadow: '#3316F2',
              }"
              :processStyle="{ backgroundColor: '#3316F2' }"
              :tooltipStyle="{
                backgroundColor: '#3316F2',
                borderColor: '#3316F2',
                borderShadow: '#3316F2',
              }"
            />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { close, compass } from "ionicons/icons";
import { menuController } from "@ionic/vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import TitleDesc from "@/components/molecules/box/TitleDesc.vue";

export default {
  data() {
    return {
      range: [0, 100],
    };
  },
  setup() {
    return {
      close,
      compass,
    };
  },
  components: {
    VueSlider,
    TitleDesc,
  },
  methods: {
    closeMenu() {
      menuController.enable(true, "end");
      menuController.close("end");
    },
  },
};
</script>
