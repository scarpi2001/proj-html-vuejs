<script>
import AppNav from './header_components/AppNav.vue'
import HeaderSection from './header_components/HeaderSection.vue'

export default {
  name: "AppHeader",
  components: {
    AppNav,
    HeaderSection,
  },
}

</script>

<template>
  <header>

    <div class="container">
      <img src="../assets/images/logo_seo_w_1x.png" alt="">
      <AppNav />
    </div>

    <HeaderSection />
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

header {
  height: 800px;
  background-image: url(../assets/images/1-hero-image.png);
  background-size: cover;
  color: $primary;

  .container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
}
</style>

