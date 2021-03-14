<template>
  <nav class="map_tab">
    <ul class="lists">
      <li class="list">
        <ion-tab-button
          href="/index/city"
          v-bind:class="{active: searchingUrl === URL_TYPE.CITY}"
          @click="changeActive(URL_TYPE.CITY)"
          class="switch"
        >
          City
        </ion-tab-button>
      </li>
      <li class="list">
        <ion-tab-button
          href="/index/kw"
          v-bind:class="{active: searchingUrl === URL_TYPE.KW}"
          @click="changeActive(URL_TYPE.KW)"
          class="switch"
        >
          Keyword
        </ion-tab-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import { URL_TYPE } from '@/const/common.ts'

export default {
  data() {
    return {
      URL_TYPE,
    }
  },
  computed: {
    ...mapState({
      searchingUrl: state => state.external.searchingUrl,
    }),
  },
  methods: {
    changeActive(value) {
      this.$store.commit('external/setSearchingUrl', value)
    }
  },
}
</script>