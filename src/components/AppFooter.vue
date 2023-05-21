<script>
import AppMenu from "./AppMenu.vue";

export default {
  name: "AppFooter",
  components: {
    AppMenu,
  },
  data() {
    return {
      socials: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-instagram",
        "fa-brands fa-twitter",
        "fa-brands fa-youtube",
      ],
    };
  },
};
</script>

<template>
  <!-- footer -->
  <footer>
    <div class="container">
      <!--  logo -->
      <img src="/logo_seo_1x.png" alt="" />

      <!-- menu -->
      <nav>
        <AppMenu />
      </nav>

      <span>
        Copyright 2012-2022 | Avada Theme by <b>ThemeFusion</b> | All Rights
        Reserved | Powered by
        <b>Scarpi</b>
      </span>

      <!-- socials -->
      <div id="socials">
        <a v-for="(social, index) in socials" :key="index" href="#">
          <font-awesome-icon :icon="social" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer {
  padding: 50px 0;
  color: $tertiary;

  nav {
    margin: 60px 0;
  }

  #socials {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    a {
      font-size: 28px;
      margin: 0 10px;
    }
  }

  b {
    color: black;
  }
}
</style>
