import { reactive } from 'vue';

export const store = reactive({
    links: [
        {
            text: "Home",
            url: "#",
            current: false,
        },
        {
            text: "Who We Are",
            url: "#",
            current: false,
        },
        {
            text: "What We Do",
            url: "#",
            current: false,
        },
        {
            text: "Where We Work",
            url: "#",
            current: false,
        },
        {
            text: "Careers",
            url: "#",
            current: false,
        },
        {
            text: "News",
            url: "#",
            current: false,
        },
        {
            text: "Get In Touch Now",
            url: "#",
            current: false,
        },
    ],
    testimonials: [
        {
            name: "Luis Desalvo",
            agency: "CREO TECH",
            review: "abilty proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience",
            img: "./assets/img/testimonials-2.jpg",
        },
        {
            name: "Linda Morini",
            agency: "MEGA TECH",
            review: "abilty proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience",
            img: "./assets/img/testimonials-1.jpg",
        },
    ],
})