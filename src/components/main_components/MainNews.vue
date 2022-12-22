<script>
export default {
    name: "MainNews",
    data() {
        return {
            cards: [
                {
                    title: "Why You Need A SEO Agency Now",
                    img: "../../src/assets/images/related-service-4-320x202.jpg",
                    date: "November 1st, 2021",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere optio nostrum consectetur"
                },
                {
                    title: "SEO Tips For Your Start Up",
                    img: "../../src/assets/images/related-service-2-320x202.jpg",
                    date: "May 16, 2022",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere optio nostrum consectetur"
                },
                {
                    title: "Image Optimization For Your Site",
                    img: "../../src/assets/images/related-service-4-320x202.jpg",
                    date: "November 22, 2022",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere optio nostrum consectetur"
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
            <h1>Our News</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae dolore dolor odit sint neque nisi
                nesciunt ducimus
            </p>
        </div>

        <!-- cards box -->
        <div class="cards">
            <!-- card -->
            <div class="card" v-for="(card, index) in cards" :key="index">
                <img :src="card.img" :alt=card.title>
                <h3>{{ card.title }}</h3>
                <span>{{ card.date }}</span>
                <p>{{ card.text }}</p>
            </div>
        </div>

        <span class="button yellow">
            <h4>GO TO NEWS</h4>
        </span>

    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;



.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
        h1 {
            margin-bottom: 20px;
        }

        p {
            color: $tertiary;
        }
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        margin: 50px 0;
        color: $tertiary;

        .card {
            width: calc(100% / 3 - 20px);
            margin: 10px;

            h3 {
                margin: 10px 0;
                color: $secondary;
            }

            p {
                margin-top: 20px;
            }
        }
    }
}
</style>

