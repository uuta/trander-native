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
          <ul class="tab">
            <li
              class="tab__item"
              :class="{ 'tab__item--active': tab === 1 }"
              @click="tab = 1"
            >
              Sign up
            </li>
            <li
              class="tab__item"
              :class="{ 'tab__item--active': tab === 2 }"
              @click="tab = 2"
            >
              Login
            </li>
          </ul>
          <div class="panel" v-show="tab === 1">
            <form class="form" @submit.prevent="register">
              <div v-if="registerErrors" class="errors">
                <ul v-if="registerErrors.name">
                  <li v-for="msg in registerErrors.name" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
                <ul v-if="registerErrors.email">
                  <li v-for="msg in registerErrors.email" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
                <ul v-if="registerErrors.password">
                  <li v-for="msg in registerErrors.password" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
                <ul v-if="registerErrors.passwordConfirmation">
                  <li
                    v-for="msg in registerErrors.passwordConfirmation"
                    :key="msg"
                  >
                    {{ msg }}
                  </li>
                </ul>
                <ul v-if="registerErrors.termsOfService">
                  <li v-for="msg in registerErrors.termsOfService" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
                <ul v-if="registerErrors.privacyPolicy">
                  <li v-for="msg in registerErrors.privacyPolicy" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
              </div>
              <LogoInput
                value=""
                type="name"
                name="name"
                placeholder="Username"
                icon="/assets/icons/util/user.png"
                @input="reflectName"
              />
              <LogoInput
                value=""
                type="email"
                name="email"
                placeholder="Your email"
                icon="/assets/icons/util/envelope.png"
                @input="reflectEmail"
              />
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
                placeholder="At least 6 characters"
                icon="/assets/icons/util/lock.png"
                @input="reflectPasswordConfirmation"
              />
              <div class="form__button">
                <Submit text="Get sterted" />
              </div>
              <div class="sns_desc">
                <span>Or signup with</span>
              </div>
              <div class="sns_wrap">
                <Circle icon="/assets/icons/util/google.png"></Circle>
              </div>
            </form>
          </div>
          <div class="panel" v-show="tab === 2">
            <form class="form" name="form" @submit.prevent="login">
              <div v-if="loginErrors" class="errors">
                <ul v-if="loginErrors.email">
                  <li v-for="msg in loginErrors.email" :key="msg">{{ msg }}</li>
                </ul>
                <ul v-if="loginErrors.password">
                  <li v-for="msg in loginErrors.password" :key="msg">
                    {{ msg }}
                  </li>
                </ul>
              </div>
              <LogoInput
                value=""
                type="email"
                name="email"
                placeholder="Your email"
                icon="/assets/icons/util/envelope.png"
                @input="reflectLoginEmail"
              />
              <LogoInput
                value=""
                type="password"
                name="password"
                placeholder="Password"
                icon="/assets/icons/util/lock.png"
                @input="reflectLoginPassword"
              />
              <ion-router-link href="/password/reset" class="panel__txt__right">
                Forgot your password?
              </ion-router-link>
              <div class="form__button">
                <Submit text="Get sterted" />
              </div>
              <div class="sns_desc">
                <span>Or login with</span>
              </div>
              <div class="sns_wrap">
                <Circle icon="/assets/icons/util/google.png"></Circle>
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
import { DIRECTION_TYPE } from "@/const/external";
import LogoInput from "@/components/atoms/input/LogoInput.vue";
import Submit from "@/components/atoms/button/Submit.vue";
import Circle from "@/components/atoms/button/Circle.vue";

export default {
  data() {
    return {
      tab: 1,
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        termsOfService: false,
        privacyPolicy: false,
      },
      settingParams: {
        distance: [0, 100],
        min: 0,
        max: 100,
        directionType: DIRECTION_TYPE.NONE.NUM,
      },
    };
  },
  components: {
    LogoInput,
    Submit,
    Circle,
  },
  computed: mapState({
    loginErrors: (state) => state.auth.loginErrorMessages,
    registerErrors: (state) => state.auth.registerErrorMessages,
    loading: (state) => state.common.loading,
  }),
  mounted() {
    this.$store.commit("common/setLoading", false);
  },
  methods: {
    login() {
      this.$store.commit("common/setLoading", true);
      const data = this.loginForm;
      const router = this.$router;
      this.$store.dispatch("auth/login", { data, router });
      this.$store.commit("external/setSuggestPushing", true);
    },
    async register() {
      this.$store.commit("common/setLoading", true);
      const data = this.registerForm;
      const router = this.$router;

      // Register
      await this.$store.dispatch("auth/register", { data, router });

      // Set setting
      await this.$store.dispatch("external/setSetting", this.settingParams);
    },
    clearError() {
      this.$store.commit("auth/setLoginErrorMessages", null);
      this.$store.commit("auth/setRegisterErrorMessages", null);
    },
    moveLink(url) {
      window.open(url, "_blank");
    },
    reflectName(e) {
      this.registerForm.name = e.target.value;
    },
    reflectEmail(e) {
      this.registerForm.email = e.target.value;
    },
    reflectPassword(e) {
      this.registerForm.password = e.target.value;
    },
    reflectPasswordConfirmation(e) {
      this.registerForm.passwordConfirmation = e.target.value;
    },
    reflectLoginEmail(e) {
      this.loginForm.email = e.target.value;
    },
    reflectLoginPassword(e) {
      this.loginForm.password = e.target.value;
    },
  },
  created() {
    this.clearError();
  },
};
</script>
<style lang="scss" scoped>
.sns_desc {
  margin-top: 40px;
  text-align: center;
  color: #8a8a8a;
  font-weight: bold;
}
.sns_wrap {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 90px;
}
</style>
