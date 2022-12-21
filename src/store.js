import { reactive } from 'vue';

export const store = reactive({
    links: [
        {
            text: "Home",
            url: "#",
            current: true,
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
})