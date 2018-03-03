<template>
  <section class="hero section is-info is-bold">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">What We Do?</h1>
      <h2 class="subtitle font-accident-two-normal small is-uppercase">
        A simple container to divide your page into sections, like the one you're currently reading
      </h2>
      <p class="font-regular-normal mb-35 is-size-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis earum iste laboriosam perferendis ratione unde voluptatum! Assumenda, dicta dignissimos ex excepturi illum natus necessitatibus, numquam officia pariatur quae reprehenderit veniam.</p>
      <div class="columns">
        <div class="column" v-for="step in steps" :key="step.id">
          <h1 class="title font-accident-two-light is-uppercase is-size-5 mb-35" v-text="step.title"></h1>
        </div>
      </div>
      <p>Hover over an item for a description.</p>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        steps: [
          {
            id: 'step_1',
            title: 'Step 1',
            description: 'Step 1 Description'
          },
          {
            id: 'step_2',
            title: 'Step 2',
            description: 'Step 2 Description'
          },
          {
            id: 'step_3',
            title: 'Step 3',
            description: 'Step 3 Description'
          },
          {
            id: 'step_4',
            title: 'Step 4',
            description: 'Step 4 Description'
          }
        ]
      }
    }
  }
</script>
