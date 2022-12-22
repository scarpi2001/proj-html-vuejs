<script>
export default {
    name: "MainClients",
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
                    name: "sponsor-1",
                    img: "../../src/assets/images/clients_partner_1-200x202.png"
                },
                {
                    name: "sponsor-2",
                    img: "../../src/assets/images/clients_partner_2-200x202.png"
                },
                {
                    name: "sponsor-3",
                    img: "../../src/assets/images/clients_partner_3-200x202.png"
                },
                {
                    name: "sponsor-4",
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
        <div id="sponsors">
            <figure v-for="(sponsor, index) in sponsors" :key="index">
                <img :src="sponsor.img" :alt="sponsor.name">
            </figure>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;



.container {
    display: block;
    position: relative;

    h1 {
        margin-bottom: 50px;
    }

    #slider {
        padding-bottom: 100px;
        border-bottom: 1px solid rgb(197, 197, 197);

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
            font-size: 28px;
            position: absolute;
            top: 65%;
            cursor: pointer;
        }

        .prev {
            left: 0px;
        }

        .next {
            right: 0px;
        }
    }

    #sponsors {
        display: flex;
        justify-content: center;
        margin-top: 50px;

        figure {
            min-width: 80px;
            margin: 0 80px;
        }
    }
}
</style>


