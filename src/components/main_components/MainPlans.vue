<script>
export default {
    name: "MainPlans",
    data() {
        return {
            cards: [
                {
                    type: "Standard",
                    price: "19",
                    projects: "5",
                    storage: "5 GB",
                },
                {
                    type: "Premium",
                    price: "29",
                    projects: "10",
                    storage: "15 GB",
                },
                {
                    type: "Professional",
                    price: "39",
                    projects: "15",
                    storage: "30 GB",
                },
                {
                    type: "Extreme",
                    price: "59",
                    projects: "Unlimited",
                    storage: "Unlimited",
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
            <h1>Our Plans</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae dolore dolor odit sint neque nisi
                nesciunt ducimus
            </p>
        </div>

        <!-- cards box -->
        <div class="cards">
            <!-- card -->
            <div class="card" v-for="(card, index) in cards" :key="index">
                <!-- tipo di offerta -->
                <h3>
                    {{ card.type }}
                </h3>

                <!-- prezzo card -->
                <div id="card_price">

                    <span id="price_number">
                        <span id="mini_icon">
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                        </span>
                        {{ card.price }}
                        <span id="mini_number">
                            99
                        </span>
                    </span>

                    <span id="mini_text">
                        monthly
                    </span>

                </div>

                <!-- info offerta -->
                <div class="card_text">
                    {{ card.projects }} projects
                </div>
                <div class="card_text">
                    {{ card.storage }} storage
                </div>
                <div class="card_text">
                    Unlimited Users
                </div>

                <div class="button">
                    <h4>START TODAY</h4>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;



.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
        color: $primary;

        h1 {
            margin-bottom: 20px;
        }
    }

    .cards {
        display: flex;
        margin: 50px 0;

        .card {
            width: calc(25% - 10px);
            background-color: $primary;
            margin: 0 5px;
            padding: 20px 40px;

            div {
                margin-top: 35px;
            }

            #card_price {
                color: #5F79FC;
                font-size: 34px;
                font-weight: bolder;

                #price_number {
                    position: relative;

                    #mini_icon {
                        color: #4F4F4F;
                        font-size: 16px;
                        position: absolute;
                        top: 5px;
                        left: -12px;
                    }

                    #mini_number {
                        font-size: 14px;
                        font-weight: bolder;
                        position: absolute;
                        top: 0;
                        right: -8px;
                    }
                }

                #mini_text {
                    color: $tertiary;
                    font-size: 12px;
                    font-style: italic;
                }
            }

            .card_text {
                font-size: 14px;
                color: $tertiary;
            }
        }
    }
}
</style>

