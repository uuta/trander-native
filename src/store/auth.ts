import { OK, CREATED, UNPROCESSABLE_ENTITY } from "../const/util";
import axios from "axios";
import { ServiceStorage } from "@/services/common/storage";
import { API } from "@/const/api";

const state = {
  user: null,
  email: null,
  apiStatus: null,
  loginErrorMessages: null,
  registerErrorMessages: null,
  resetErrorMessages: null,
  regenerateErrorMessages: null,
  registerModal: false,
};

const getters = {
  check: (state) => !!state.user,
  username: (state) => (state.user ? state.user.name : ""),
  email: (state) => (state.email ? state.email.email : ""),
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setEmail(state, email) {
    state.email = email;
  },
  setApiStatus(state, status) {
    state.apiStatus = status;
  },
  setLoginErrorMessages(state, messages) {
    state.loginErrorMessages = messages;
  },
  setRegisterErrorMessages(state, messages) {
    state.registerErrorMessages = messages;
  },
  setResetErrorMessages(state, messages) {
    state.resetErrorMessages = messages;
  },
  setRegenerateErrorMessages(state, messages) {
    state.regenerateErrorMessages = messages;
  },
  setRegisterModal(state, registerModal) {
    state.registerModal = registerModal;
  },
};

const actions = {
  async register(context, { data, router }) {
    context.commit("setApiStatus", null);
    const response = await axios.post(API.REGISTER, data);
    if (response.status === CREATED) {
      context.commit("setApiStatus", true);
      context.commit("setUser", response.data);
      context.commit("setRegisterModal", true);
      router.push("/index");
      return false;
    }

    context.commit("setApiStatus", false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit("setRegisterErrorMessages", response.data.errors);
    } else {
      context.commit("error/setCode", response.status, { root: true });
    }
  },
  async login(context, { data, router }) {
    context.commit("setApiStatus", null);
    const response = await axios.post(API.LOGIN, data);

    if (response.status === OK) {
      context.commit("setApiStatus", true);
      context.commit("setUser", response.data);

      // Store a token
      ServiceStorage.setItem(
        ServiceStorage.KEY_API_TOKEN,
        response.data.api_token
      );

      router.push("/index");
      return false;
    }
    context.commit("setApiStatus", false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit("setLoginErrorMessages", response.data.errors);
    } else {
      context.commit("error/setCode", response.status, { root: true });
    }
  },
  async logout(context, router) {
    context.commit("setApiStatus", null);
    const response = await axios.post(API.LOGOUT);

    if (response.status === OK) {
      context.commit("setApiStatus", true);
      context.commit("setUser", null);
      router.push("/login");
      return false;
    }
    context.commit("setApiStatus", false);
    context.commit("error/setCode", response.status, { root: true });
  },
  async currentUser(context) {
    context.commit("setApiStatus", null);

    // Get the token from storage
    const apiToken = await ServiceStorage.getItem(ServiceStorage.KEY_API_TOKEN);
    const param = {
      params: {
        apiToken: apiToken.value,
      },
    };
    const response = await axios.get(API.USER, param);
    const user = response.data || null;

    if (response.status === OK) {
      console.log("bbbbbbbbb");
      context.commit("setApiStatus", true);
      context.commit("setUser", user);
      return false;
    }

    context.commit("setApiStatus", false);
    context.commit("error/setCode", response.status, { root: true });
  },
  async checkRegistration(context) {
    const response = await axios.get(API.USER);
    const check = response.data.check_registration || null;

    if (response.status === OK) {
      context.commit("setRegisterModal", check);
    }
  },
  async hiddenRegisterModal(context) {
    context.commit("setRegisterModal", false);
    await axios.post(API.CHANGE_REGISTRATION);
  },
  async resetPassword(context, { data, router }) {
    context.commit("setApiStatus", null);
    const response = await axios.post(API.RESET_PASSWORD, data);

    if (response.status === OK) {
      context.commit("setEmail", data);
      router.push("/sent-email");
      return false;
    }

    context.commit("setApiStatus", false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit("setResetErrorMessages", response.data.errors);
    } else {
      context.commit("error/setCode", response.status, {
        root: true,
      });
    }
  },
  async regeneratePassword(context, { data, router }) {
    context.commit("setApiStatus", null);
    data["token"] = router.app._route.params.token;
    const response = await axios.post(API.REGENERATE_PASSWORD, data);
    if (response.status === OK) {
      context.commit("setApiStatus", true);
      context.commit("setUser", response.data);
      router.push("/regenerate-password-complete");
      return false;
    }

    context.commit("setApiStatus", false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      context.commit("setRegenerateErrorMessages", response.data.errors);
    } else {
      context.commit("error/setCode", response.status, {
        root: true,
      });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
