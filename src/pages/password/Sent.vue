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
            <div class="accept"><img src="/assets/icons/util/sent.png"/></div>
            <div class="panel__hr">Password reset email sent</div>
            <p>
              An email has been sent to your rescue email, {{ email }}. Follow the directions in the email to reset your password.
            </p>
            <div class="button_wrap"><Cancel text="Back to page" @click="backToPage" /></div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Cancel from "@/components/atoms/button/Cancel.vue";

export default {
  components: {
    Cancel,
  },
  computed: {
    email() {
      return this.$store.getters["auth/email"];
    },
  },
  methods: {
    backToPage() {
      window.location.href = "/login";
    },
  },
};
</script>

<style lang="scss" scoped>
  .accept {
    img {
      width: 20%;
      margin: 0 auto;
      display: block;
      margin-bottom: 30px;
      filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.1));
    }
  }
  .button_wrap {
    margin-top: 50px;
  }
</style>