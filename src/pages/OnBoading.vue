<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><img src="/assets/icon/logo.png"></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-button href="/tabs/tab2">ボタン</ion-button>
      <div>
        <h1>Fixed Content</h1>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>