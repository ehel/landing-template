<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <svg enable-background="new 0 0 500 500" id="Layer_1" version="1.1" viewBox="0 0 500 500" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="250.976" cy="253.523" fill="#4384EC" r="216.569"/><path d="M304.343,43.587l-53.367,209.936l214.161,32.36c1.582-10.557,2.408-21.362,2.408-32.36   C467.546,152.333,398.143,67.359,304.343,43.587z" fill="#3FC18D"/><path d="M467.546,253.523c0-42.602-12.303-82.328-33.548-115.824L250.976,253.523l214.161,32.36   C466.719,275.326,467.546,264.521,467.546,253.523z" fill="#FECC5D"/><path d="M250.976,253.523L128.235,431.958c34.888,24.044,77.166,38.134,122.742,38.134   c108.61,0,198.54-79.952,214.161-184.209L250.976,253.523z" fill="#2666CE"/></g></svg>
        </div>
        <div class="column center-content-vertically align-center">
          <h1 class="title font-accident-two-light is-uppercase mb-35">Responsive Charts</h1>
          <h2 class="subtitle font-accident-two-normal small is-uppercase has-text-info">
            3 charts libraries
          </h2>
          <ul class="font-regular-normal has-text-centered">
            <li>Chart.js - simple yet flexible JavaScript charting for designers & developers.</li>
            <li>Peity - progressive svg pie, donut, bar and line mini charts.</li>
            <li>Chartist - Simple responsive charts.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .project-horizontal{
    min-height: 400px;
  }
  .project-vertical{
    min-height: 400px;
  }
  .project{
    background-size: cover !important;
    overflow: hidden;
    box-shadow: 0 12px 20px rgba(10, 10, 10, 0.1), 0 0 0 0px rgba(10, 10, 10, 0.1);
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
    background: url("/static/imgs/social-feed.png");
  }
  .second-project{
    background: url("/static/imgs/post.png");
  }
  .third-project{
    background: url("/static/imgs/inbox.png");
  }
</style>
