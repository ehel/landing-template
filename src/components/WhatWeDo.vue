<template>
  <section class="hero section is-info is-bold what-we-do" style="position: relative">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">What We Do?</h1>
      <h2 class="subtitle font-accident-two-normal small is-uppercase">
        A simple container to divide your page into sections, like the one you're currently reading
      </h2>
      <p class="font-regular-normal mb-35 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis earum iste laboriosam perferendis ratione unde voluptatum! Assumenda, dicta dignissimos ex excepturi illum natus necessitatibus, numquam officia pariatur quae reprehenderit veniam.</p>
      <div class="columns mb-35 mt-35">
        <div class="column step-wrapper" v-for="(step, index) in steps" :key="step.id">
          <h1 class="title font-accident-two-medium is-uppercase is-size-5" v-text="step.title"></h1>
          <div class="step-body" @mouseover="select(index)" @mouseout="deselect">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36"><path class="heroicon-ui" :d="step.d"/></svg>
            </div>
          </div>
        </div>
      </div>
      <span class="tag is-primary mb-35 is-rounded step-number font-regular-bold has-text-centered" v-text="selected ? selectedIndex + 1 : '-'"></span>
      <p class="font-regular-normal is-6" v-text="description"></p>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      description () {
        return this.selected ? this.steps[this.selectedIndex].description : 'Hover over an item for a description.'
      }
    },
    methods: {
      select (index) {
        this.selected = true
        this.selectedIndex = index
      },
      deselect () {
        this.selected = false
        this.selectedIndex = null
      }
    },
    data () {
      return {
        selected: false,
        selectedIndex: null,
        steps: [
          {
            id: 'step_1',
            title: 'Step 1',
            description: 'Step 1 Description',
            d: 'M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z'
          },
          {
            id: 'step_2',
            title: 'Step 2',
            description: 'Step 2 Description',
            d: 'M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm-2 2H9v1a1 1 0 1 1-2 0V6H5v4h14V6h-2v1a1 1 0 0 1-2 0V6zm4 6H5v8h14v-8z'
          },
          {
            id: 'step_3',
            title: 'Step 3',
            description: 'Step 3 Description',
            d: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z'
          },
          {
            id: 'step_4',
            title: 'Step 4',
            description: 'Step 4 Description',
            d: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .what-we-do{
    background-image: url('/static/imgs/World_map_(blue_dots).svg'), linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%) !important;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .step-body{
    opacity: .6;
    margin: 0 auto;
    display: inline-block;
    border-radius: 50%;
    border: 1px dashed #fff;
    transition: 300ms ease all;
    cursor: pointer;
    .icon-wrapper{
      padding: 40px 45px;
      margin: 10px;
      border-radius: 50%;
      transition: 300ms ease background-color;
    }
    &:hover{
      opacity: 1;
      box-shadow: 0 6px 8px rgba(10, 10, 10, 0.1), 0 0 0 0 rgba(10, 10, 10, 0.1);
      .icon-wrapper{
        background-color: #fff;
      }
      svg{
        fill: #04a6d7;
      }
    }
    svg{
      fill: #fff;
      transition: 300ms ease fill;
    }
  }
  .step-number{
    width: 25px;
    box-shadow: 0 6px 8px rgba(10, 10, 10, 0.1), 0 0 0 0 rgba(10, 10, 10, 0.1);
  }
</style>
