<template lang="jade">
  div
    button(v-on:click="login") Login
</template>

<script>
  export default {
    methods: {
      login() {
        this.$store.dispatch('getToken');
      }
    }
  }
</script>
