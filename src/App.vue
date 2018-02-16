<template>
  <div id="app">
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
    name: 'App'
  }
</script>

<style lang="scss">
@import "./assets/scss/app";

</style>
