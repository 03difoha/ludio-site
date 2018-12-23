<template>
  <div>
    <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
    <!-- Main UI -->
    <div class="mt-3 mb-3">
      Submitted Names:
      <ul>
        <li v-for="n in names">{{n}}</li>
      </ul>
    </div>
    <!-- Modal Component -->
    <b-modal >
      <!-- <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text"
                      placeholder="Enter your name"
                      v-model="name"></b-form-input>
        <b-form-input type="text"
                      placeholder="Enter your email"
                      v-model="email"></b-form-input>
      </form> -->
      <form action="https://xyz.us7.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value="fb66abc77bce32858a9bdf813">
      <input type="hidden" name="id" value="67afc8c3d2">
      <input type="text" name="MERGE1" id="MERGE1" size="25" value="">
      <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      names: [],
      title: 'Like to follow updates with Ludio?'
    }
  },
  methods: {
    clearName () {
      this.name = ''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your email')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.names.push(this.name)
      this.clearName()
      this.title = ''
      // this.$refs.modal.hide()
    }
  }
}
</script>

<!-- modal-prevent-1.vue -->



    
