<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <div class="alert alert-flash"
         :class="'alert-'+level"
         role="alert"
         v-show="show"
         v-text="body">
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['message'],
    data () {
      return {
        body: this.message,
        level: 'success',
        show: false
      }
    },
    created () {
      if (this.message) {
        this.flash()
      }
      window.events.$on(
        'flash', data => this.flash(data)
      )
    },
    methods: {
      flash (data) {
        if (data) {
          this.body = data.message
          this.level = data.level
        }
        this.show = true
        this.hide()
      },

      hide () {
        setTimeout(() => {
          this.show = false
        }, 3000)
      }
    }
  }
</script>

<style scoped>
  .alert-flash {
    position: fixed;
    right: 25px;
    bottom: 25px;
    padding: 15px 25px;
    border-radius: 5px;
  }
  .alert-success{
    background-color: #1abc9c;
    color: #ffffff;
    border-color: #1abc9c;
  }
  .alert-danger{
    background-color: #e74c3c;
    color: #ffffff;
    border-color: #e74c3c;
  }
  .alert-info{
    background-color: #3498db;
    color: #ffffff;
    border-color: #3498db;
  }
  .alert-warning{
    background-color: #d9a81d;
    color: #ffffff;
    border-color: #d9a81d;
  }
</style>
