<template>
  <div>
    <section class="hero is-primary is-fullheight is-bold">
      <vue-particles color="#dedede" style="position: absolute; width: 100%; height: 100%;"></vue-particles>
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
            </div>
            <div class="column">
              <img src="/static/imgs/Chrome-Browser-t.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title font-accident-two-light is-uppercase mb-35">Section</h1>
        <h2 class="subtitle font-accident-two-normal small is-uppercase has-text-primary">
          A simple container to divide your page into sections, like the one you're currently reading
        </h2>
        <p class="font-regular-normal mb-35">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis earum iste laboriosam perferendis ratione unde voluptatum! Assumenda, dicta dignissimos ex excepturi illum natus necessitatibus, numquam officia pariatur quae reprehenderit veniam.</p>
        <div class="columns">
          <div class="column">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40%" height="40%" fill="url(#primary)">
              <linearGradient id="primary">
                <stop offset="5%" stop-color="#009e6c" />
                <stop offset="95%" stop-color="#00d1b2" />
              </linearGradient>
              <path class="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
            </svg>
            <h3 class="subtitle font-accident-two-medium is-uppercase">First</h3>
            <p class="font-regular-normal small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores dicta fugiat modi nam natus quasi recusandae repellendus ullam voluptate? Ad aspernatur consequatur dolores nulla obcaecati quasi reprehenderit similique suscipit.
            </p>
          </div>
          <div class="column">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40%" height="40%" fill="url(#primary)">
              <path class="heroicon-ui" d="M9.57 3.38a8 8 0 0 0 10.4 10.4 1 1 0 0 1 1.31 1.3 10 10 0 1 1-13-13 1 1 0 0 1 1.3 1.3zM7.1 5.04A8 8 0 1 0 18.3 16.27 10 10 0 0 1 7.08 5.04z"/>
            </svg>
            <h3 class="subtitle font-accident-two-medium is-uppercase">Second</h3>
            <p class="font-regular-normal small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores dicta fugiat modi nam natus quasi recusandae repellendus ullam voluptate? Ad aspernatur consequatur dolores nulla obcaecati quasi reprehenderit similique suscipit.
            </p>
          </div>
          <div class="column">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40%" height="40%" fill="url(#primary)">
              <path stroke-width="1" class="heroicon-ui" d="M17 22a2 2 0 0 1-2-2v-1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3H5a3 3 0 1 1 0-6h1V8c0-1.11.9-2 2-2h3V5a3 3 0 1 1 6 0v1h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3zm3-2v-3h-1a3 3 0 1 1 0-6h1V8h-3a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8v3a2 2 0 0 1-2 2H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3h3v-1a3 3 0 1 1 6 0v1h3z"/>
            </svg>
            <h3 class="subtitle font-accident-two-medium is-uppercase">Third</h3>
            <p class="font-regular-normal small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores dicta fugiat modi nam natus quasi recusandae repellendus ullam voluptate? Ad aspernatur consequatur dolores nulla obcaecati quasi reprehenderit similique suscipit.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero section is-primary is-bold">
      <div class="container has-text-centered">
        <h1 class="title font-accident-two-light is-uppercase mb-35">Section</h1>
        <h2 class="subtitle font-accident-two-normal small is-uppercase">
          A simple container to divide your page into sections, like the one you're currently reading
        </h2>
        <p class="font-regular-normal mb-35">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis earum iste laboriosam perferendis ratione unde voluptatum! Assumenda, dicta dignissimos ex excepturi illum natus necessitatibus, numquam officia pariatur quae reprehenderit veniam.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-text-vertically{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
