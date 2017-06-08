<template lang="jade">
  div
    router-link(v-if='!isAuthenticated', to="login") Login
    router-link(v-else, to="logout") Logout
    router-view
</template>

<script>  
  export default {
    name: 'app',
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    }
  }
</script>
