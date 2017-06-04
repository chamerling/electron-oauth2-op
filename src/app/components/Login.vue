<template lang="jade">
  div
    button(v-on:click="login") {{text}}
</template>

<script>
  import {ipcRenderer} from 'electron';

  export default {
    data() {
      return {
        text: 'Login'
      }
    },
    methods: {
      login: () => {
        ipcRenderer.send('openpaas-oauth', 'getToken');
      }
    }
  }
</script>
