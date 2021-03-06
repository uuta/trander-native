<template>
  <div class="c-errors_common">
    <div v-for="errorMessage in errorMessages" v-bind:key="errorMessage.id">
      {{errorMessage[0]}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessages: { type: Object, required: true },
  },
}
</script>