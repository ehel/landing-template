<template>
  <footer>
    <div class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <p class="font-regular-normal">
              © {{year}} <a href="http://valentinsirbu.me/">Sirbu Valentin</a> - Silence Theme v1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
