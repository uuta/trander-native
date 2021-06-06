<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="city" href="/index/city">
          <ion-icon :icon="triangle" />
          <ion-label>City</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="keyword" href="/index/kw">
          <ion-icon :icon="ellipse" />
          <ion-label>Keyword</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  data() {
    return {
      pin: "/assets/icons/logo.png"
    }
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    }
  }
}
</script>