<template>
  <section class="hero is-info is-fullheight is-bold">
    <vue-particles color="#dedede" style="position: absolute; width: 100%; height: 100%;"></vue-particles>
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
              <span class="navbar-burger burger" :class="{'is-active': burgerOpen}" @click="burgerOpen = !burgerOpen">
                <span></span>
                <span></span>
                <span></span>
              </span>
          </div>
          <div class="navbar-menu" :class="{'is-active': burgerOpen}">
            <div class="navbar-end">
              <span class="navbar-item">
                  <a href="http://silence.valentinsirbu.me/docs" class="font-accident-two-normal navbar-item-link">Docs</a>
                </span>
              <span class="navbar-item">
                  <a href="#" class="button is-info is-inverted is-outlined font-accident-two-normal" :class="{'is-fullwidth': burgerOpen}">
                    Live Preview
                  </a>
                </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column center-text-vertically">
            <h1 class="title font-accident-two-light is-uppercase">
              Silence
            </h1>
            <h2 class="subtitle font-regular-normal is-uppercase">
              Bootstrap & Vue.js Admin Template
            </h2>
            <div class="field is-grouped">
              <p class="control">
                <a href="http://silence.valentinsirbu.me" class="button is-info is-inverted is-outlined">Live Preview</a>
              </p>
              <p class="control">
                <a href="https://wrapbootstrap.com/theme/silence-vue.js-admin-template-WB0262S25" class="button is-success font-accident-two-normal" :class="{'is-fullwidth': burgerOpen}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#fff"><path class="heroicon-ui" d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                  Buy Now for $18
                </a>
              </p>
            </div>
          </div>
          <div class="column">
            <img src="/static/imgs/silence.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VueParticles from 'vue-particles/src/vue-particles/vue-particles'
  export default {
    components: {
      VueParticles
    },
    data () {
      return {
        burgerOpen: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar-item{
    .navbar-item-link{
      transition: 300ms ease color;
      &:hover{
        color: #fff !important;
      }
    }
  }
  .hero.is-info .navbar-menu{
    background: none;
    box-shadow: none;
    &.is-active{
      text-align: center;
    }
  }
  .center-text-vertically {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
</style>
