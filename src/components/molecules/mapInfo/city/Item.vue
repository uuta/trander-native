<template>
  <dl class="map_info_items">
    <dt class="title">Let's give a shot!</dt>
    <dd class="list">
      <img :src="setCountryImg" class="country_flag" />
      <span class="desc">{{ cityName }}</span>
    </dd>
    <dd class="list info">Distance：{{ distance }} km</dd>
    <dd class="list info">Direction：{{ direction }}</dd>
    <dd class="container head_share">
      <Explore
        :twitterUrl="twitterUrl"
        :googleMapUrl="googleMapUrl"
        :streetViewUrl="streetViewUrl"
      />
    </dd>
  </dl>
</template>

<script>
import { mapState } from "vuex";
import CONST_EXTERNAL from "@/const/external.ts";
import Explore from "@/components/molecules/discoveries/Explore.vue"

export default {
  created() {
    this.RECOMMEND_FREQUENCY = CONST_EXTERNAL.RECOMMEND_FREQUENCY;
  },
  components: {
    Explore
  },
  computed: {
    ...mapState({
      countryCode: (state) => state.external.countryCode,
      cityName: (state) => state.external.cityName,
      distance: (state) => state.external.distance,
      direction: (state) => state.external.direction,
      cityId: (state) => state.external.cityId,
      lat: (state) => state.external.lat,
      lng: (state) => state.external.lng,
      placeId: (state) => state.external.placeId,
    }),
    setCountryImg() {
      if (this.countryCode != null) {
        return (
          "https://www.countryflags.io/" + this.countryCode + "/flat/32.png"
        );
      }
      return "";
    },
    showAngleBtn() {
      return !Object.keys(this.$route.params).length;
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
};
</script>
