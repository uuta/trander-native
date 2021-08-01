<template>
  <ion-page>
    <ion-header class="ion-no-border shadow">
      <ion-toolbar>
        <ion-title><img src="/assets/icons/logo.png"/></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="container--small">
          <div class="panel">
            <div class="panel__hr">Complete password reset!</div>
            <div class="panel__txt">
              Welcome back! You have successfully reset your password. You can
              continue to enjoy Trander. Let's start exploring.
            </div>
          </div>
          <div class="form__button">
            <IneffectiveSubmit text="Let's play" @click="moveLink" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import IneffectiveSubmit from "@/components/atoms/button/IneffectiveSubmit.vue";

export default {
  components: {
    IneffectiveSubmit,
  },
  methods: {
    moveLink() {
      window.location.href = "/index/city";
    },
  },
};
</script>

<style lang="scss" scoped>
  .form__button {
    margin-top: 0;
  }
</style>