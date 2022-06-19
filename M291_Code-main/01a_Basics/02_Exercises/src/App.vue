<template>
  <div>
    <MyComponent />
  </div>
</template>

<script>
/* Alle Komponenten Importieren */
import Demos from './components/05b_VueDirectives'


export default {
  components: {
    MyComponent: Demos
  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
