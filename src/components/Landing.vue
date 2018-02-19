<template>
  <div>
    <app-header></app-header>
    <about-us></about-us>
    <what-we-do></what-we-do>
    <features></features>
    <testimonials></testimonials>
    <projects></projects>
    <contact-us></contact-us>
  </div>
</template>

<script>
  import AppHeader from './Header'
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
      ContactUs,
      AppHeader
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
