<template>
  <ion-header class="ion-no-border navbar">
    <ion-toolbar>
      <ion-buttons slot="primary">
        <ion-menu-button @click="openMenu" class="button_header">
          <ion-icon :icon="menu"></ion-icon>
        </ion-menu-button>
      </ion-buttons>
      <ion-title><img src="/assets/icons/logo.png"></ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  menuController,
} from "@ionic/vue";
import { menu } from "ionicons/icons";

export default {
  name: "Header",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  setup() {
    return {
      menu,
    };
  },
  methods: {
    openMenu() {
      menuController.enable(true, 'end');
      menuController.open('end');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'resources/sass/Foundation/_color.scss';
  @import 'resources/sass/Foundation/_var.scss';
</style>