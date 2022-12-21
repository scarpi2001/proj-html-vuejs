<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },

}

</script>

<template>
  <AppHeader />

  <main>
    <AppMain />
  </main>

</template>

<style lang="scss">
@use "./styles/partials/variables" as*;
@use "./styles/general.scss" as*;
</style>
