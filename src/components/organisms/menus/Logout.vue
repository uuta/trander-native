<template>
  <ion-list>
    <ion-item
      color="light"
      lines="none"
      mode="ios"
      button="true"
      @click="setOpen(true)"
      ><ion-icon :icon="exit" slot="start" color="danger"></ion-icon>
      <ion-label class="label_title">Logout</ion-label>
      <ion-alert
        :is-open="isOpenRef"
        header="Logout"
        message="Do you wish to log out?"
        css-class="alert"
        :buttons="buttons"
        @didDismiss="setOpen(false)"
      >
      </ion-alert>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { exit } from "ionicons/icons";
import { IonAlert } from "@ionic/vue";
import { ServiceStorage } from "@/services/common/storage";

export default defineComponent({
  components: { IonAlert },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);
    const buttons = [
      {
        text: "NO",
        role: "cancel",
        cssClass: "secondary",
      },
      {
        text: "YES",
        handler: () => {
          ServiceStorage.removeItem(ServiceStorage.KEY_API_TOKEN);
          window.location.href = "/login";
        },
      },
    ];

    return { buttons, isOpenRef, setOpen, exit };
  },
});
</script>

<style lang="scss" scoped>
.label_title {
  font-size: 1.5rem;
  font-weight: bold;
}
ion-item {
  --min-height: 70px;
  border-bottom: 1px solid #efefef;
}
</style>
