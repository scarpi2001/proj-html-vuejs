<script>
import AppMenu from "./AppMenu.vue";
import HeaderSection from "./header_components/HeaderSection.vue";

export default {
  name: "AppHeader",
  components: {
    AppMenu,
    HeaderSection,
  },
};
</script>

<template>
  <header>
    <!-- nav -->
    <nav>
      <img src="images/logo_seo_w_1x.png" alt="" />
      <AppMenu />
    </nav>

    <!-- header bottom -->
    <section class="container">
      <HeaderSection />
    </section>
  </header>
  <!-- comment -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
  height: 800px;
  background-image: url(images/1-hero-image.png);
  background-size: cover;
  color: $primary;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    height: 80px;
  }

  .container {
    flex-direction: row;
    height: calc(100% - 80px);
  }
}
</style>
