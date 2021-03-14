<template>
  <ion-app>
    <Menu/>
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "@/components/templates/Menu.vue"

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  }
});
</script>