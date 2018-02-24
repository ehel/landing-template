<template>
  <div>
    <app-header></app-header>
    <about-us></about-us>
    <what-we-do></what-we-do>
    <features></features>
    <responsive></responsive>
    <colors></colors>
    <projects></projects>
    <contact-us></contact-us>
  </div>
</template>

<script>
  import AppHeader from './Header'
  import AboutUs from './AboutUs'
  import WhatWeDo from './WhatWeDo'
  import Features from './Features'
  import Colors from './Colors'
  import Projects from './Projects'
  import ContactUs from './ContactUs'
  import Responsive from './Responsive'

  export default {
    name: 'Main',
    components: {
      AboutUs,
      WhatWeDo,
      Features,
      Colors,
      Projects,
      ContactUs,
      AppHeader,
      Responsive
    }
  }
</script>
