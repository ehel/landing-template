<template>
  <div id="app">
    <transition name="fade">
      <nav class="navbar is-fixed-top is-transparent" v-if="showNavbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item is-active" href="#">
              Home
            </a>
                <span class="navbar-burger burger" :class="{'is-active': burgerOpen}" @click="burgerOpen = !burgerOpen">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
          </div>
          <div class="navbar-menu" :class="{'is-active': burgerOpen}">
            <div class="navbar-end">
              <a href="#" class="navbar-item font-regular-normal">Examples</a>
              <a href="#" class="navbar-item font-regular-normal">Docs</a>
              <a href="#" class="navbar-item font-regular-normal">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <router-view/>
    <footer>
      <div class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <strong>Template created</strong> by <a href="http://valentinsirbu.me">Valentin Sirbu</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        burgerOpen: false,
        showNavbar: false
      }
    },
    mounted () {
      document.addEventListener('scroll', () => {
        this.showNavbar = window.scrollY > 500
      })
    }
  }
</script>

<style lang="scss">
@import "./assets/scss/app";
.is-transparent{
  opacity: .95;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
