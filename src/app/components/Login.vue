<template lang="jade">
  div
    button(v-on:click="login") {{text}}
</template>

<script>
  export default {
    data() {
      return {
        text: 'Login'
      }
    },
    methods: {
      login() {
        this.$store.dispatch('getToken');
      }
    }
  }
</script>
