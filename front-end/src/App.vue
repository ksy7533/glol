<template>
  <div id="summoner_app">
    <v-header></v-header>
    <v-container></v-container>
  </div>
</template>

<script>
import Header from './components/headerComp/Header.vue';
import Container from './components/containerComp/Container.vue';

export default {
  name: 'app',
  components: {
    'v-header' : Header,
    'v-container' : Container
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
  background-color:$deep-purple-lighten-5;
}

body{
  min-width:32rem;
}

#summoner_app {
    font-family: 'NanumSquare', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
