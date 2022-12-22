<script>
export default {
    name: "HeaderSection",
}

</script>

<template>

    <div class="text">
        <h1>SEM Campaigns Made Simple With Avada</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio sint aliquid itaque tenetur
            sunt.
        </p>

        <div id="buttons_box">
            <span class="button yellow">
                <h4>BUY AVADA NOW</h4>
            </span>
            <span class="button blue">
                <h4>CONTACT US</h4>
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

h1 {
    font-size: 44px;
}

p {
    margin: 30px 0;
}

#buttons_box {
    display: flex;
}
</style>

