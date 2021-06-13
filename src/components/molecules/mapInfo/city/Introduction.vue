<template>
  <dl class="map_info_introduction">
    <dt class="title">Explore the cities</dt>
    <dd class="list">
      Hi, {{ username }}!<br>
      Press the button to find a city near you.
    </dd>
  </dl>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      username: 'auth/username'
    }),
  },
}
</script>