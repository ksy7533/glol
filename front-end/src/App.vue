<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import Header from './components/headerComp/Header.vue';

export default {
  name: 'app',
  components: {
    'v-header' : Header
  },
};
</script>

<style lang="scss">
@import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);

html, body{
  width:100%;
  height:100%;
}

html{
  font-size:62.5%;
}

#app {
    font-family: 'NanumSquare', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
