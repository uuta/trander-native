<template>
  <dl class="map_info_introduction">
    <dt class="title">Explore the cities</dt>
    <dd class="list">
      Hi, {{ username }}!<br>
      ボタンを押して、近くの街を探してみましょう。
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