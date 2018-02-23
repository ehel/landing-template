<template>
  <section class="hero section is-light is-bold">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">Testimonials</h1>
      <h2 class="subtitle font-accident-two-normal small is-uppercase has-text-info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos laborum tenetur veniam voluptas!
      </h2>
      <p class="small font-regular-normal text-center mb-35">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Accusamus aliquid beatae, deserunt esse ex, explicabo hic illum incidunt maxime, possimus sed suscipit vitae. <br> Dignissimos, enim laborum nihil nulla sequi unde.
      </p>
      <div>
        <slick class="columns" :options="options" ref="slick">
          <div class="column" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img class="is-rounded" :src="testimonial.image" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content" style="overflow: hidden">
                    <p class="title is-4 font-accident-two-medium" v-text="testimonial.name"></p>
                    <p class="subtitle is-6 font-accident-two-light has-text-info" v-text="testimonial.company"></p>
                  </div>
                  <div class="media-right">
                    <p class="is-size-7 font-accident-two-normal is-uppercase" v-text="testimonial.date"></p>
                  </div>
                </div>
                <div class="content font-regular-normal" v-text="testimonial.message"></div>
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
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        },
        testimonials: [
          {
            id: 1,
            name: 'John Doe',
            image: 'https://bulma.io/images/placeholders/96x96.png',
            company: 'ABC inc.',
            date: '1 Jan 2018',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Phasellus nec iaculis mauris.'
          },
          {
            id: 2,
            name: 'Sam Doe',
            image: 'https://bulma.io/images/placeholders/96x96.png',
            company: 'Google',
            date: '2 Jan 2018',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Phasellus nec iaculis mauris.'
          },
          {
            id: 3,
            name: 'Joe Doe',
            image: 'https://bulma.io/images/placeholders/96x96.png',
            company: 'Amazon',
            date: '3 Jan 2018',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Phasellus nec iaculis mauris.'
          },
          {
            id: 4,
            name: 'Alex Doe',
            image: 'https://bulma.io/images/placeholders/96x96.png',
            company: 'eBay',
            date: '4 Jan 2018',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Phasellus nec iaculis mauris.'
          },
          {
            id: 5,
            name: 'Alan Doe',
            image: 'https://bulma.io/images/placeholders/96x96.png',
            company: 'Microsoft',
            date: '5 Jan 2018',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Phasellus nec iaculis mauris.'
          },
          {
            id: 6,
            name: 'Jane Doe',
            image: 'https://bulma.io/images/placeholders/96x96.png',
            company: 'Apple',
            date: '6 Jan 2018',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Phasellus nec iaculis mauris.'
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
