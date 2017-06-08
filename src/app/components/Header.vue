<template lang="jade">
  md-toolbar
    h1.md-title(style="flex: 1") OpenPaaS
    md-button.md-icon-button(v-if="isAuthenticated" @click.native="logout")
      md-icon close
</template>

<script>
  export default {
    name: 'header',
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    },

    methods: {
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({name: 'login'});
        });
      }
    }
  }
</script>