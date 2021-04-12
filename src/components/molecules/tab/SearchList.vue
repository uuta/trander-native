<template>
  <nav class="map_tab">
    <ul class="lists">
      <li class="list">
        <button
          @click="changeActive(URL_TYPE.CITY)"
          :class="{ active: searchingUrl === URL_TYPE.CITY }"
          class="switch"
        >
          City
        </button>
      </li>
      <li class="list">
        <button
          @click="changeActive(URL_TYPE.KW)"
          :class="{ active: searchingUrl === URL_TYPE.KW }"
          class="switch"
        >
          Keyword
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { URL_TYPE } from "@/const/common.ts";

export default {
  data() {
    return {
      URL_TYPE,
    };
  },
  computed: {
    ...mapState({
      searchingUrl: (state) => state.external.searchingUrl,
    }),
  },
  methods: {
    changeActive(value) {
      this.$store.commit("external/setSearchingUrl", value);
      if (value === URL_TYPE.CITY) {
        this.$router.push('/index/city');
      }
      if (value === URL_TYPE.KW) {
        this.$router.push('/index/kw');
      }
    },
  },
};
</script>
