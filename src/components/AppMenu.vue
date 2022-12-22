<script>
export default {
    name: "AppMenu",
    data() {
        return {
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
        }
    }
}
</script>

<template>
    <!-- menu -->
    <ul>
        <li v-for="(link, index) in links" :key="index">
            <a :class="{ active: link.current }" :href="link.url">
                {{ link.text }}
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

ul {
    display: flex;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        margin: 0 10px;

        a {
            text-decoration: none;

            &:hover {
                color: $secondary;
            }
        }

    }

    .active {
        color: $secondary;
    }

}
</style>

