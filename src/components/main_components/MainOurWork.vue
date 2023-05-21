<script>
export default {
  name: "MainOurWork",
  data() {
    return {
      cards: [
        {
          name: "study-1",
          img: "/images/case-study-gallery-1-1-400x300.jpg",
        },
        {
          name: "study-2",
          img: "/images/case-study-gallery-2-400x300.jpg",
        },
        {
          name: "study-3",
          img: "/images/case-study-gallery-3-1-400x300.jpg",
        },
        {
          name: "study-4",
          img: "/images/case-study-gallery-4-1-400x300.jpg",
        },
        {
          name: "study-5",
          img: "/images/case-study-gallery-5-1-400x300.jpg",
        },
        {
          name: "study-6",
          img: "/images/case-study-gallery-6-1-400x300.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- container -->
  <div class="container">
    <div class="text">
      <h1>Our Work</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae
        dolore dolor odit sint neque nisi nesciunt ducimus
      </p>
    </div>

    <!-- cards box -->
    <div class="cards">
      <!-- card -->
      <div class="card" v-for="(card, index) in cards" :key="index">
        <img :src="card.img" :alt="card.name" />
      </div>
    </div>

    <span class="button yellow">
      <h4>VIEW OUR WORK</h4>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.container {
  .text {
    h1 {
      margin-bottom: 20px;
    }
  }

  .card {
    width: calc(100% / 3 - 10px);
    margin: 5px;
  }
}
</style>
