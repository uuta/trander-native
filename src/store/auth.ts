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

      // Store a token
      ServiceStorage.setItem(
        ServiceStorage.KEY_API_TOKEN,
        response.data.apiToken
      );

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
    const response = await axios.post(API.LOGIN, data)

    if (response.status === OK) {
      context.commit("setApiStatus", true);
      context.commit("setUser", response.data);

      // Store a token
      ServiceStorage.setItem(
        ServiceStorage.KEY_API_TOKEN,
        response.data.apiToken
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

    // TODO: Delete an apiToken

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

    // TODO:
    // ServiceStorage.removeItem(
    //   ServiceStorage.KEY_API_TOKEN,
    // );

    const response = await axios.get(API.USER);
    const user = response.data || null;

    if (response.status === OK) {
      // FIXME: 
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
  async hiddenRegisterModal(context, params) {
    context.commit("setRegisterModal", false);
    await axios.post(API.CHANGE_REGISTRATION, params);
  },
  async resetPassword(context, { data, router }) {
    context.commit("setApiStatus", null);
    const response = await axios.post(API.RESET_PASSWORD, data);

    if (response.status === OK) {
      context.commit("setEmail", data);
      window.location.href = '/password/sent';
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
  async regeneratePassword(context, data) {
    context.commit("setApiStatus", null);
    const response = await axios.put(API.REGENERATE_PASSWORD, data);

    // Store a token
    ServiceStorage.setItem(
      ServiceStorage.KEY_API_TOKEN,
      response.data.apiToken
    );

    if (response.status === OK) {
      context.commit("setApiStatus", true);
      context.commit("setUser", response.data);
      window.location.href = '/password/complete';
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
