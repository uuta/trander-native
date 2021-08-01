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
            <div class="panel__hr">Password Reset</div>
            <form
              class="form"
              autocomplete="off"
              @submit.prevent="regeneratePassword"
            >
              <div v-if="regenerateErrors" class="errors">
                <ul v-if="regenerateErrors.email">
                  <li v-for="msg in regenerateErrors.email" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
                <ul v-if="regenerateErrors.password">
                  <li v-for="msg in regenerateErrors.password" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
              </div>
              <LogoInput
                value=""
                type="password"
                name="password"
                placeholder="At least 6 characters"
                icon="/assets/icons/util/lock.png"
                @input="reflectPassword"
              />
              <LogoInput
                value=""
                type="password"
                name="password"
                placeholder="Confirm new password"
                icon="/assets/icons/util/lock.png"
                @input="reflectPasswordConfirmation"
              />
              <div class="form__button">
                <Submit text="Reset password" />
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

export default {
  data() {
    return {
      regenerateForm: {
        email: null,
        password: null,
        passwordConfirmation: null,
        token: null,
      },
    };
  },
  components: {
    LogoInput,
    Submit,
  },
  computed: mapState({
    regenerateErrors: (state) => state.auth.regenerateErrorMessages,
  }),
  mounted() {
    this.getToken();
  },
  methods: {
    getToken() {
      const pattern = /^\?token=(.*)&email=(.*)$/g;
      const url = location.search;
      const params = pattern.exec(url);
      this.regenerateForm.token = (1 in params) ? params[1] : null;
      this.regenerateForm.email = (2 in params) ? decodeURIComponent(params[2]) : null;
    },
    regeneratePassword() {
      const data = this.regenerateForm;
      this.$store.dispatch("auth/regeneratePassword", data);
    },
    reflectPassword(e) {
      this.regenerateForm.password = e.target.value;
    },
    reflectPasswordConfirmation(e) {
      this.regenerateForm.passwordConfirmation = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.panel__hr {
  text-align: center;
  margin-bottom: 20px;
}
</style>
