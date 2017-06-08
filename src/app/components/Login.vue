<template lang="jade">
  .login
    // @click.native instead of v-on:click -> https://github.com/vuematerial/vue-material/issues/630 😞
    md-button.md-raised.md-primary(@click.native="login") Login
</template>

<script>
  export default {
    name: 'login',
    methods: {
      login() {
        this.$store.dispatch('getToken').then(res => {
          this.$store.getters.onAuthenticated.then(this.onSuccess);
        }, err => {
          console.log('Error while getting token', err);
        });
      },

      onSuccess() {
        this.$router.push({name: 'home'});
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
