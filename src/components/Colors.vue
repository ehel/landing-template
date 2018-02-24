<template>
  <section class="hero section is-light is-bold">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">7 color schemes</h1>
      <h2 class="subtitle font-accident-two-normal small is-uppercase has-text-info">
        Material UI Colors
      </h2>
      <div>
        <slick class="columns" :options="options" ref="slick">
          <div class="column" v-for="theme in themes" :key="theme.id">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="theme.image" :alt="theme.name">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-size-6 font-accident-two-medium is-uppercase" v-text="theme.name"></p>
              </div>
            </div>
          </div>
        </slick>
      </div>
    </div>
  </section>
</template>

<script>
  import Slick from './Slick.vue'
  export default {
    components: {
      Slick
    },
    data () {
      return {
        options: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 1500,
          arrows: false,
          pauseOnHover: false,
          pauseOnFocus: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 622,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 456,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        },
        themes: [
          {
            id: 1,
            name: 'Green',
            image: '/static/imgs/green.png'
          },
          {
            id: 2,
            name: 'Blue',
            image: '/static/imgs/blue.png'
          },
          {
            id: 3,
            name: 'Orange',
            image: '/static/imgs/orange.png'
          },
          {
            id: 4,
            name: 'Red',
            image: '/static/imgs/red.png'
          },
          {
            id: 5,
            name: 'Teal',
            image: '/static/imgs/teal.png'
          },
          {
            id: 6,
            name: 'Purple',
            image: '/static/imgs/purple.png'
          },
          {
            id: 7,
            name: 'Brown',
            image: '/static/imgs/brown.png'
          }
        ]
      }
    }
  }
</script>

<style>
  .card{
    box-shadow: 0 6px 8px rgba(10, 10, 10, 0.1), 0 0 0 0px rgba(10, 10, 10, 0.1);
  }
</style>
