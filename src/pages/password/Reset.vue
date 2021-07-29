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
            <div class="panel__hr">Password reset</div>
            <div v-if="resetErrors" class="errors">
              <ul v-if="resetErrors.email">
                <li v-for="msg in resetErrors.email" :key="msg">{{ msg }}</li>
              </ul>
            </div>
            <form
              class="form"
              autocomplete="off"
              @submit.prevent="resetPassword"
            >
              <div class="panel__txt">
                Please enter the email address you used to register. You will
                receive an email with a link to reset your password.
              </div>
              <LogoInput
                value=""
                type="email"
                name="email"
                placeholder="Your email"
                icon="/assets/icons/util/envelope.png"
                @input="reflectEmail"
              />
              <div class="form__button">
                <div class="pile"><Submit text="Reset password" /></div>
                <div class="pile"><Cancel text="Back to page" @click="backToPage" /></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { mapState } from "vuex";
import LogoInput from "@/components/atoms/input/LogoInput.vue";
import Submit from "@/components/atoms/button/Submit.vue";
import Cancel from "@/components/atoms/button/Cancel.vue";

/**
 * 参照：
 * https://qiita.com/azukiazusa/items/9f467fdea7298baf3476
 * https://qiita.com/azukiazusa/items/1a7e5849a04c22951e97
 */
export default {
  components: {
    LogoInput,
    Submit,
    Cancel,
  },
  data() {
    return {
      resetForm: {
        email: "",
      },
    };
  },
  computed: mapState({
    resetErrors: (state) => state.auth.resetErrorMessages,
    loading: (state) => state.auth.loading,
  }),
  methods: {
    resetPassword() {
      const data = this.resetForm;
      const router = this.$router;
      this.$store.dispatch("auth/resetPassword", { data, router });
    },
    reflectEmail(e) {
      this.resetForm.email = e.target.value;
    },
    // TEST: Does this work properly in native-app?
    backToPage() {
      window.location.href = '/login';
    }
  },
};
</script>
