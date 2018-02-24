<template>
  <section class="hero section is-info is-bold">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">Build Commands</h1>
      <h2 class="subtitle font-accident-two-normal small is-uppercase">
        All build commands are executed via NPM Scripts.
      </h2>
      <div class="columns">
        <div class="column">
          <h3 class="subtitle font-accident-two-medium">npm run dev</h3>
          <ul class="font-regular-normal small">
            <li>Webpack + vue-loader for single file Vue components.</li>
            <li>State preserving hot-reload.</li>
            <li>Lint-on-save with ESLint.</li>
            <li>Source maps.</li>
          </ul>
        </div>
        <div class="column">
          <h3 class="subtitle font-accident-two-medium">npm run build</h3>
          <ul class="font-regular-normal small">
            <li>JavaScript minified with UglifyJS.</li>
            <li>HTML minified with html-minifier.</li>
            <li>CSS across all components extracted into a single file and minified with cssnano.</li>
          </ul>
        </div>
        <div class="column">
          <h3 class="subtitle font-accident-two-medium">npm run unit</h3>
          <ul class="font-regular-normal small">
            <li>Run unit tests in JSDOM with Jest.</li>
            <li>Supports ES2015+ in test files.</li>
            <li>Easy mocking.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
