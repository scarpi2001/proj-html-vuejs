<script>
export default {
    name: "MainServices",
    data() {
        return {
            cards: [
                {
                    icon: "fa-brands fa-google",
                    title: "Google SEO",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis est necessitatibus sint et consecteuter elit adipisicing excepturi.",
                },
                {
                    icon: "fa-solid fa-gear",
                    title: "Brand Strategy",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis est necessitatibus sint et consecteuter elit adipisicing excepturi.",
                },
                {
                    icon: "fa-solid fa-building",
                    title: "Local SEO",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis est necessitatibus sint et consecteuter elit adipisicing excepturi.",
                },
                {
                    icon: "fa-solid fa-chart-column",
                    title: "SEO Analysis",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis est necessitatibus sint et consecteuter elit adipisicing excepturi.",
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
            <h1>See Our Top Notch Services</h1>
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

                <div class="read">
                    Read More >
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;



.container {
    color: $primary;

    .text {
        h1 {
            margin-bottom: 20px;
        }
    }

    .cards {
        display: flex;
        margin: 50px 0;

        .card {
            background-color: #071B50;
            padding: 40px 10px;
            margin-right: 25px;

            .icon {
                font-size: 24px;
                color: $secondary;
            }

            h3 {
                margin: 15px 0;
            }

            .read {
                color: $secondary;
                margin-top: 15px;
            }

        }
    }
}
</style>

