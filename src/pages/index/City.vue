<template>
  <Header></Header>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="map" v-bind:class="{ show_city_detail: isShowCityDetail }">
        <Registration v-if="registerModal"></Registration>
        <Error></Error>
        <Setting></Setting>
        <GoogleMap
          api-key="AIzaSyAcqtDRzXizxuI8ejthIrszBo5DS88mKN4"
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="14"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
        <KwModal v-if="kwModal"></KwModal>
        <MapInfo></MapInfo>
        <button class="button_map_setting" @click="showSettingModal">
          <i class="fas fa-cog"></i>
        </button>
        <Searched></Searched>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// @ts-nocheck
import {
  IonPage,
  IonContent,
} from "@ionic/vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { mapState } from "vuex";
import Error from "@/components/organisms/errors/Modal.vue";
import Header from "@/components/templates/Header.vue";
import KwModal from "@/components/organisms/kw/Modal.vue";
import MapInfo from "@/components/organisms/index/MapInfo.vue";
import Registration from "@/components/molecules/modals/Registration.vue";
import Searched from "@/components/organisms/index/Searched.vue";
import Setting from "@/components/organisms/index/Setting.vue";
import { URL_TYPE } from "@/const/common";

export default {
  name: "City",
  components: {
    IonContent,
    IonPage,
    GoogleMap,
    Marker,
    Error,
    Header,
    KwModal,
    MapInfo,
    Registration,
    Searched,
    Setting,
  },
  data() {
    // FIX:
    const center = { lat: 40.689247, lng: -74.044502 };
    return { center };
  },
  created() {
    this.setSearchingUrl();
    this.$store.commit("external/setSettingModal", false);
  },
  computed: {
    ...mapState({
      lat: (state) => state.external.lat,
      lng: (state) => state.external.lng,
      currentLat: (state) => state.external.currentLat,
      currentLng: (state) => state.external.currentLng,
      icon: (state) => state.external.icon,
      wikiDataId: (state) => state.external.wikiDataId,
      settingModal: (state) => state.external.settingModal,
      errorMessages: (state) => state.external.errorMessages,
      geoLocationModal: (state) => state.external.geoLocationModal,
      registerModal: (state) => state.auth.registerModal,
      kwModal: (state) => state.kw.modal,
      kwSuccessful: (state) => state.kw.successful,
      kwLat: (state) => state.kw.lat,
      kwLng: (state) => state.kw.lng,
      loading: (state) => state.common.loading,
    }),
    isShowCityDetail() {
      return Boolean(Object.keys(this.$route.params).length);
    },
  },
  methods: {
    showSettingModal() {
      this.$store.commit("external/setSettingModal", true);
    },
    setSearchingUrl() {
      const url =
        this.$route.path.indexOf("city") != -1 ? URL_TYPE.CITY : URL_TYPE.KW;
      this.$store.commit("external/setSearchingUrl", url);
    },
  },
};
</script>
