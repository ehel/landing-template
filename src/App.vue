<template>
  <div id="app">
    <transition name="fade">
      <nav class="navbar is-fixed-top is-transparent" v-show="showNavbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="/static/imgs/logo.png" height="28px">
            </a>
            <a href="/" class="navbar-item font-regular-medium is-uppercase has-text-grey-darker is-active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/></svg>
              Home</a>
            <a href="#" class="navbar-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            </a>
                <span class="navbar-burger burger" :class="{'is-active': burgerOpen}" @click="burgerOpen = !burgerOpen">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
          </div>
          <div class="navbar-menu" :class="{'is-active': burgerOpen}">
            <div class="navbar-end">
              <a href="#" class="navbar-item font-regular-medium is-uppercase  has-text-grey-darker">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M20 9v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm0-2V5H4v2h16zM6 9v10h12V9H6zm4 2h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"/></svg>
                Examples</a>
              <a href="#" class="navbar-item font-regular-medium is-uppercase has-text-grey-darker">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z"/></svg>
                Docs</a>
              <span class="navbar-item">
                  <a href="#" class="button is-info font-regular-medium is-uppercase is-outlined" :class="{'is-fullwidth': burgerOpen}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"/></svg>
                Sign Up
                  </a>
                </span>
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './components/Footer'
  export default {
    name: 'App',
    components: {
      AppFooter
    },
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
 .navbar.is-fixed-top{
   border-bottom: 1px #dedede solid;
   .navbar-item.is-active{
     margin-bottom: -1px;
     border-bottom: 2px #04a6d7 solid;
     svg{
       fill: #04a6d7;
     }
   }
   .navbar-item{
     transition: 300ms ease color;
     font-size: 12px;
     a{
       padding: 15px 20px;
       font-size: 12px;
     }
     svg{
       margin-right: 5px;
       fill: hsl(0, 0%, 21%);
       transition: 300ms ease fill;
     }
     &:hover{
       color: #0f0f0f !important;
       svg{
         fill: #04a6d7;
       }
     }
   }
   .navbar-item{
     .button.is-info{
       svg{
         transition: 100ms ease fill;
         fill: #04a6d7;
       }
       &:hover{
         svg{
           fill: #fff;
         }
       }
     }
   }
 }
</style>
