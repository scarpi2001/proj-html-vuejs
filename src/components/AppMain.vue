<script>
import MainMeetUs from './main_components/MainMeetUs.vue'
import MainServices from './main_components/MainServices.vue'
import MainOurWork from './main_components/MainOurWork.vue'
import MainPlans from './main_components/MainPlans.vue'

export default {
    name: "AppMain",
    components: {
        MainMeetUs,
        MainServices,
        MainOurWork,
        MainPlans,
    }
}

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
    <section class="main_section background normal">
        <MainPlans />
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.main_section {
    text-align: center;
}

.main_section.special {
    padding-top: 60px;
}

.main_section.white {
    background-color: #F7F8FA;
}

.main_section.blue {
    background-image: url(../assets/images/pattern_background.png);
    background-color: #051642;
}

.main_section.background {
    background-image: url(../assets/images/background1.jpg);
    background-size: cover;
}

.main_section.normal {
    padding: 60px 0;
}
</style>

