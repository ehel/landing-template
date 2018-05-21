<template>
  <div id="app">
    <transition name="fade">
      <nav class="navbar is-fixed-top is-transparent" v-if="showNavbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="/static/imgs/logo.png" height="28px">
            </a>
            <a href="/" class="navbar-item font-regular-medium is-uppercase has-text-grey-darker is-active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/></svg>
              Home</a>
                <span class="navbar-burger burger" :class="{'is-active': burgerOpen}" @click="burgerOpen = !burgerOpen">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
          </div>
          <div class="navbar-menu" :class="{'is-active': burgerOpen}">
            <div class="navbar-end">
              <a href="http://silence.valentinsirbu.me/docs" class="navbar-item font-regular-medium is-uppercase has-text-grey-darker">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z"/></svg>
                Docs</a>
              <span class="navbar-item">
                  <a href="http://silence-v101.valentinsirbu.me" class="button is-info font-regular-medium is-uppercase is-outlined" :class="{'is-fullwidth': burgerOpen}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12"><path class="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 8.59V6H4v6.59l4.3-4.3a1 1 0 0 1 1.4 0l5.3 5.3 2.3-2.3a1 1 0 0 1 1.4 0l1.3 1.3zm0 2.82l-2-2-2.3 2.3a1 1 0 0 1-1.4 0L9 10.4l-5 5V18h16v-2.59zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                    Live Preview
                  </a>
                </span>
              <span class="navbar-item">
                  <a href="https://wrapbootstrap.com/theme/silence-vue.js-admin-template-WB0262S25" class="button is-success font-regular-medium" :class="{'is-fullwidth': burgerOpen}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="#fff"><path class="heroicon-ui" d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                    Buy Now for $13
                  </a>
                </span>
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <router-view/>
    <app-footer></app-footer>
    <flash></flash>
  </div>
</template>

<script>
  import AppFooter from './components/Footer'
  import Flash from './components/Flash'
  export default {
    name: 'App',
    components: {
      AppFooter,
      Flash
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
     .button.is-success{
       svg{
         fill: #fff;
       }
     }
   }
 }
</style>
