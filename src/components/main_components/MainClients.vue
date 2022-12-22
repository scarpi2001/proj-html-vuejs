<script>
import AppSponsors from './clients_components/AppSponsors.vue'

export default {
    name: "MainClients",
    components: {
        AppSponsors,
    },
    data() {
        return {
            active: 0,
            slides: [
                {
                    name: "Luis Desalvo",
                    agency: "CREO TECH",
                    review: "abilty proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience",
                    img: "../../src/assets/images/testimonials-2.jpg",
                },
                {
                    name: "Linda Morini",
                    agency: "MEGA TECH",
                    review: "abilty proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience",
                    img: "../../src/assets/images/testimonials-1.jpg",
                },
            ],
            sponsors: [
                {
                    img: "../../src/assets/images/clients_partner_1-200x202.png"
                },
                {
                    img: "../../src/assets/images/clients_partner_2-200x202.png"
                },
                {
                    img: "../../src/assets/images/clients_partner_3-200x202.png"
                },
                {
                    img: "../../src/assets/images/clients_partner_4-200x202.png"
                },
            ]
        }
    },
    methods: {
        //metodi navigazione
        nextImage() {
            this.active++;
            if (this.active > this.slides.length - 1) {
                this.active = 0;
            }
        },
        prevImage() {
            this.active--;
            if (this.active < 0) {
                this.active = this.slides.length - 1;
            }
        },
    }
}

</script>

<template>
    <!-- container -->
    <div class="container">

        <h1>What Our Clients Say</h1>

        <!-- slider -->
        <div id="slider">

            <img :src="slides[active].img" :alt="slides[active].name" />


            <div class="slide_text">
                <div class="review">{{ slides[active].review }}</div>
                <div>
                    <span class="name">{{ slides[active].name }}</span>
                    <span>, {{ slides[active].agency }}</span>
                </div>
            </div>

            <div class="prev" @click="prevImage">
                <font-awesome-icon icon="fa-solid fa-angles-left" />
            </div>
            <div class="next" @click="nextImage">
                <font-awesome-icon icon="fa-solid fa-angles-right" />
            </div>
        </div>

        <!-- sponsors -->
        <div>
            <AppSponsors />
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;



.container {
    position: relative;

    h1 {
        margin-bottom: 50px;
    }

    #slider {


        img {
            width: 130px;
            height: 130px;
            border-radius: 50%;
        }

        .slide_text {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-content: center;

            .review {
                color: $tertiary;
                font-style: italic;
                width: 60%;
                margin: 20px 0;
            }

            .name {
                font-weight: 800;
            }
        }



        .prev,
        .next {
            font-size: 20px;
            position: absolute;
            top: 60%;
            cursor: pointer;
        }

        .prev {
            left: 0px;
        }

        .next {
            right: 0px;
        }
    }
}
</style>


