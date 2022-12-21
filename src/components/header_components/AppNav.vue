<script>
import { store } from '../../store';

export default {
    name: "AppNav",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <ul>
        <li v-for="(link, index) in store.links" :key="index">
            <a :class="{ active: link.current }" :href="link.url">
                {{ link.text }}
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

ul {
    display: flex;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        margin: 0 15px;

        a {
            color: $primary;
            text-decoration: none;

            &:hover {
                color: $secondary;
            }
        }

    }

}
</style>

