<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

}

</script>

<template>
  <AppHeader />

  <main>
    <AppMain />
  </main>

  <AppFooter />
</template>

<style lang="scss">
@use "./styles/partials/variables" as*;
@use "./styles/general.scss" as*;
</style>
