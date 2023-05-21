<script>
import MainMeetUs from "./main_components/MainMeetUs.vue";
import MainServices from "./main_components/MainServices.vue";
import MainOurWork from "./main_components/MainOurWork.vue";
import MainPlans from "./main_components/MainPlans.vue";
import MainNews from "./main_components/MainNews.vue";
import MainClients from "./main_components/MainClients.vue";
import MainConsultation from "./main_components/MainConsultation.vue";

export default {
  name: "AppMain",
  components: {
    MainMeetUs,
    MainServices,
    MainOurWork,
    MainPlans,
    MainNews,
    MainClients,
    MainConsultation,
  },
};
</script>

<template>
  <!-- sezione MeetUs -->
  <section class="main_section white special">
    <MainMeetUs />
  </section>

  <!-- sezione Services -->
  <section class="main_section blue normal">
    <MainServices />
  </section>

  <!-- sezione OurWork -->
  <section class="main_section white normal">
    <MainOurWork />
  </section>

  <!-- sezione plans -->
  <section class="main_section plans normal">
    <MainPlans />
  </section>

  <!-- sezione news -->
  <section class="main_section white normal">
    <MainNews />
  </section>

  <!-- sezione clients -->
  <section class="main_section normal">
    <MainClients />
  </section>

  <!-- sezione consultations -->
  <section class="main_section consult">
    <MainConsultation />
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main_section {
  text-align: center;
}

.main_section.white {
  background-color: #f7f8fa;
}

.main_section.blue {
  background-image: url(images/pattern_background.png);
  background-color: #051642;
}

.main_section.plans {
  background-image: url(images/background1.jpg);
  background-size: cover;
}

.main_section.consult {
  background-image: url(images/CTA-seo-1.jpg);
  background-size: cover;
}
</style>
