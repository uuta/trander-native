<template>
  <ion-page>
    <ion-header class="ion-no-border shadow">
      <ion-toolbar>
        <ion-title><img src="/assets/icons/logo.png"/></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="wrap">
        <Slides @handleEnd="handleEnd" />
        <div class="btn_wrap">
          <Submit v-if="state.enable == 1" text="GET STARTED" @submit="handleSubmit" />
          <Disable v-else text="GET STARTED" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import Slides from "@/components/molecules/slider/Slides.vue";
import Submit from "@/components/atoms/button/Submit.vue";
import Disable from "@/components/atoms/button/Disable.vue";
import { reactive } from "vue";
import { useRouter } from 'vue-router';

interface State {
  enable: boolean;
}

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    Slides,
    Submit,
    Disable,
  },
  setup() {
    const state = reactive<State>({
      enable: false,
    });

    const router = useRouter();

    const handleEnd = () => {
      state.enable = true;
    };

    const handleSubmit = () => {
      router.push('/login');
    };

    return { state, handleEnd, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: calc(100vh - 44px);

  .btn_wrap {
    position: absolute;
    width: 90%;
    left: 0;
    right: 0;
    bottom: 60px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
