<template>
  <div class="c-modal__overlay" v-if="modal" @click="hiddenModal">
    <div class="c-modal__overlay__wrap__sml">
      <div class="c-modal__msg__section">
        <div>
          <dl v-if="cityName" class="c-head_title__mid__modal">
            <dt>Find a new city!</dt>
            <dd>
              <img :src="setCountryImg" class="country_flag" />
              <span class="desc">{{ cityName }}</span>
            </dd>
          </dl>
          <p>Wanna trip?</p>
        </div>
        <Explore
          :twitterUrl="twitterUrl"
          :googleMapUrl="googleMapUrl"
          :streetViewUrl="streetViewUrl"
        />
      </div>
      <button class="button__modal" @click="hiddenModal">OK</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Explore from "@/components/molecules/discoveries/Explore.vue"

export default {
  components: {
    Explore
  },
  computed: {
    ...mapState({
      lat: (state) => state.external.lat,
      lng: (state) => state.external.lng,
      cityName: (state) => state.external.cityName,
      countryCode: (state) => state.external.countryCode,
      modal: (state) => state.external.modal,
      cityId: (state) => state.external.cityId,
      placeId: (state) => state.external.placeId,
    }),
    setCountryImg: function() {
      if (this.countryCode != null) {
        return (
          "https://www.countryflags.io/" + this.countryCode + "/flat/32.png"
        );
      }
      return "";
    },
    twitterUrl() {
      const url = "https://trander.net/kw/share/" + this.placeId;
      const content =
        "How about this place?%0a%0a" +
        "%20%23Trander%0a%0a" +
        this.cityName +
        "%0a";
      return "https://twitter.com/intent/tweet?text=" + content + "&url=" + url;
    },
    googleMapUrl() {
      return (
        "https://www.google.com/maps/search/?api=1&query=" +
        this.lat +
        "," +
        this.lng +
        "&query_place_id=" +
        this.placeId
      );
    },
    streetViewUrl() {
      return (
        "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=" +
        this.lat +
        "," +
        this.lng
      );
    },
  },
  methods: {
    hiddenModal() {
      this.$store.commit("external/setModal", false);
    },
  },
};
</script>
