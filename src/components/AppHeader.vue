<script>
import AppMenu from './header_components/AppMenu.vue'
import HeaderSection from './header_components/HeaderSection.vue'

export default {
  name: "AppHeader",
  components: {
    AppMenu,
    HeaderSection,
  },
}

</script>

<template>
  <header>

    <nav>
      <img src="../assets/images/logo_seo_w_1x.png" alt="">
      <AppMenu />
    </nav>

    <section class="container">
      <HeaderSection />
    </section>

  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

header {
  height: 800px;
  background-image: url(../assets/images/1-hero-image.png);
  background-size: cover;
  color: $primary;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    height: 80px;
  }

  .container {
    display: flex;
    align-items: center;
    height: calc(100% - 80px);
  }
}
</style>

