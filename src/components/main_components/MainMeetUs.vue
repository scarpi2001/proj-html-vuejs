<script>
export default {
    name: "MainMeetUs",
    data() {
        return {
            cards: [
                {
                    icon: "fa-solid fa-road",
                    title: "Establish Goals",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis est necessitatibus sint.",
                },
                {
                    icon: "fa-solid fa-video",
                    title: "Work With A Team",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis est necessitatibus sint.",
                },
                {
                    icon: "fa-solid fa-droplet",
                    title: "Get Results",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis est necessitatibus sint.",
                },
            ]
        }
    }
}

</script>

<template>
    <!-- container -->
    <div class="container">
        <div class="text">
            <h1>Meet The New Agency SEO Template From The Avada Team</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae dolore dolor odit sint neque nisi
                nesciunt ducimus
            </p>
        </div>

        <!-- cards box -->
        <div class="cards">
            <!-- card -->
            <div class="card" v-for="(card, index) in cards" :key="index">
                <div class="icon">
                    <font-awesome-icon :icon="card.icon" />
                </div>
                <h3>{{ card.title }}</h3>
                <p>{{ card.text }}</p>
            </div>
        </div>

        <img src="../../assets/images/agency-seo-desk-front-800x380.jpg" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;



.container {

    .text {
        h1 {
            margin-bottom: 20px;
        }

        p {
            color: $tertiary;
        }
    }

    .cards {

        .card {
            width: calc(100% / 3 - 40px);
            background-color: #fff;
            border-radius: 15px;
            padding: 30px 15px;
            margin: 20px;

            .icon {
                font-size: 24px;
                color: $secondary;
            }

            h3 {
                margin: 15px 0;
            }

            p {
                color: $tertiary;
            }

        }
    }
}
</style>

