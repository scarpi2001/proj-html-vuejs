<script>
export default {
    name: "MainConsultation",
}

</script>

<template>

    <div class="layover">
        <div class="container">
            <div class="text">
                <h1>Start Your Free Consultation</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt perspiciatis doloremque
                </p>
            </div>
        </div>

        <span class="button yellow">
            CONTACT US NOW
        </span>
    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

.layover {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 80px 0;
    height: 100%;

    .container {
        color: $primary;

        .text {
            margin-bottom: 40px;

            h1 {
                margin-bottom: 20px;
            }
        }
    }
}
</style>
