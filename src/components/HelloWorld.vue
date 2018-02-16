<template>
  <div>
    <section class="hero is-info is-fullheight is-bold">
      <vue-particles color="#dedede" style="position: absolute; width: 100%; height: 100%;"></vue-particles>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column center-text-vertically">
              <h1 class="title font-accident-two-light is-uppercase">
                Full Height title
              </h1>
              <h2 class="subtitle font-regular-normal is-uppercase">
                Full Height subtitle
              </h2>
              <a class="button is-info is-inverted is-outlined">Get Started</a>
            </div>
            <div class="column">
              <img src="/static/imgs/Chrome-Browser-t.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <about-us></about-us>
    <what-we-do></what-we-do>
    <features></features>
    <testimonials></testimonials>
    <projects></projects>
    <contact-us></contact-us>
  </div>
</template>

<script>
  import AboutUs from './AboutUs'
  import WhatWeDo from './WhatWeDo'
  import Features from './Features'
  import Testimonials from './Testimonials'
  import Projects from './Projects'
  import ContactUs from './ContactUs'

  export default {
    name: 'Main',
    components: {
      AboutUs,
      WhatWeDo,
      Features,
      Testimonials,
      Projects,
      ContactUs
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center-text-vertically {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
</style>
