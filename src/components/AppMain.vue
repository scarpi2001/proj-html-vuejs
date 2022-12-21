<script>
import MainMeetUs from './main_components/MainMeetUs.vue'

export default {
    name: "AppMain",
    components: {
        MainMeetUs,
    }
}

</script>

<template>
    <section class="main_section white special">
        <MainMeetUs />
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

.main_section.normal {
    padding: 60px 0;
}
</style>

