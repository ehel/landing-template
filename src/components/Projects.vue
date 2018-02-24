<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">Page Examples</h1>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification first-project project project-vertical">
            <div class="content">
              <p class="title font-accident-two-medium is-uppercase is-size-5 mb-35">Social Feed</p>
              <a href="http://silence.valentinsirbu.me/social" target="_blank" class="subtitle is-size-7 font-accident-two-normal is-uppercase">Preview Page</a>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-vertical is-8">
          <article class="tile is-child notification second-project project project-horizontal">
            <div class="content">
              <p class="title font-accident-two-medium is-uppercase is-size-5 mb-35">Blog</p>
              <a href="http://silence.valentinsirbu.me/blog" target="_blank" class="subtitle is-size-7 font-accident-two-normal is-uppercase">Preview Page</a>
            </div>
          </article>
          <article class="tile is-child notification third-project project project-horizontal">
            <div class="content">
              <p class="title font-accident-two-medium is-uppercase is-size-5 mb-35">Inbox</p>
              <a href="http://silence.valentinsirbu.me/inbox" target="_blank" class="subtitle is-size-7 font-accident-two-normal is-uppercase">Preview Page</a>
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
