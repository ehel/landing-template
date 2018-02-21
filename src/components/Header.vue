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
                  <a href="#" class="font-regular-normal navbar-item-link">Examples</a>
                </span>
              <span class="navbar-item">
                  <a href="#" class="font-accident-two-normal navbar-item-link">Docs</a>
                </span>
              <span class="navbar-item">
                  <a href="#" class="button is-info is-inverted is-outlined font-accident-two-normal" :class="{'is-fullwidth': burgerOpen}">
                    Sign Up
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
</template>

<script>
  export default {
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
