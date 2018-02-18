<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">Projects</h1>
      <h2 class="subtitle font-accident-two-normal small is-uppercase has-text-info">
        A simple container to divide your page into sections, like the one you're currently reading
      </h2>
      <p class="small font-regular-normal text-center mb-35">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid beatae, deserunt esse ex, explicabo hic illum incidunt maxime, possimus sed suscipit vitae. <br> Dignissimos, enim laborum nihil nulla sequi unde.
      </p>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification first-project project project-vertical">
            <div class="content">
              <p class="title font-accident-two-medium is-uppercase is-size-5 mb-35">Project Title</p>
              <p class="subtitle is-size-7 font-accident-two-normal is-uppercase">Project Description</p>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-vertical is-8">
          <article class="tile is-child notification second-project project project-horizontal">
            <div class="content">
              <p class="title font-accident-two-medium is-uppercase is-size-5 mb-35">Project Title</p>
              <p class="subtitle is-size-7 font-accident-two-normal is-uppercase">Project Description</p>
            </div>
          </article>
          <article class="tile is-child notification third-project project project-horizontal">
            <div class="content">
              <p class="title font-accident-two-medium is-uppercase is-size-5 mb-35">Project Title</p>
              <p class="subtitle is-size-7 font-accident-two-normal is-uppercase">Top tile</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .project-horizontal{
    min-height: 300px;
  }
  .project-vertical{
    min-height: 300px;
  }
  .project{
    background-size: cover !important;
    .content{
      transition: 300ms ease all;
      opacity: 0;
      padding: 40px;
      background-color: rgba(64, 163, 224, 0.54);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
    }
    &:hover{
      .content{
        opacity: 1;
      }
    }
  }
  .first-project{
    background: url("/static/imgs/pexels-photo-95916.jpeg");
  }
  .second-project{
    background: url("/static/imgs/pexels-photo-265087.jpeg");
  }
  .third-project{
    background: url("/static/imgs/pexels-photo-630839.jpeg");
  }
</style>
