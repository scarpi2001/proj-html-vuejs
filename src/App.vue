<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "App",
  components: {
    AppHeader,
  },

}

</script>

<template>
  <AppHeader />

  <main>

  </main>
</template>

<style lang="scss">
@use "./styles/partials/variables" as*;
@use "./styles/general.scss" as*;
</style>
