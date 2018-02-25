<template>
  <section class="hero section is-info is-bold">
    <div class="container has-text-centered">
      <h1 class="title font-accident-two-light is-uppercase mb-35">CONTACT ME</h1>
      <h2 class="subtitle font-accident-two-normal small is-uppercase">
        Got an Issue?<br>
        Send me a message using this form and i'll respond as soon as possible.
      </h2>
      <div class="colums">
        <div class="column is-half is-offset-one-quarter">
          <form action="#">
            <div class="control has-icons-left is-expanded">
              <div class="field">
                <input type="email" name="email" class="input is-flat required email" placeholder="email address" v-model="email">
              </div>
              <span class="icon is-small is-left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#dedede"><path class="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/></svg>
                  </span>
            </div>
            <div class="control has-icons-left is-expanded">
              <div class="field">
                <input type="text" name="name" class="input is-flat required email" v-model="name" placeholder="name">
              </div>
              <span class="icon is-small is-left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#dedede"><path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
                  </span>
            </div>
            <div class="field">
              <textarea class="textarea" placeholder="Message" v-model="message"></textarea>
            </div>
            <div class="control">
              <button class="button is-info is-inverted is-outlined is-pulled-right" @click.prevent="sendMessage">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        email: '',
        subject: 'silence',
        message: ''
      }
    },
    methods: {
      sendMessage () {
        this.$http.post('http://api.valentinsirbu.me/api/contact', this.$data).then(() => {
          window.flash('Thank You! Your message has been sent.')
          this.name = ''
          this.email = ''
          this.message = ''
        }).catch(() => {
          window.flash('Something went wrong. Please try again later or contact me at contact@valentinsirbu.me.', 'danger')
        })
      }
    }
  }
</script>
