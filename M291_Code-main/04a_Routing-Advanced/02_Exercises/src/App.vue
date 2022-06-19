<template>
 <div id="app">
    <div id="logo"><img class="logo" alt="BZZ logo" src="./assets/logo.png"></div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/message">Message</router-link> |
      <router-link to="/messages">Message Feed</router-link> |
      <router-link :to="{ name: 'about', params: { user: 'von Gregory & Matteo'}}">About</router-link>
    </div>
    <router-view/>
    <MyNavigation />
  </div>
</template>

<script>

import SimpleNav from './components/SimpleNav'

export default {
  components: {
    MyNavigation: SimpleNav,
  },
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>

