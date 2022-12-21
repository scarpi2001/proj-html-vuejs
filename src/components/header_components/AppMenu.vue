<script>
import { store } from '../../store';

export default {
    name: "AppMenu",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <!-- menu -->
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
        margin: 0 10px;

        a {
            color: $primary;
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

