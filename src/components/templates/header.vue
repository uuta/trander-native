<template>
  <ion-header class="ion-no-border navbar">
    <ion-toolbar>
      <ion-buttons slot="primary">
        <ion-menu-button @click="openMenu">
          <ion-icon :icon="menu"></ion-icon>
        </ion-menu-button>
      </ion-buttons>
      <ion-title>Explore cities</ion-title>
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