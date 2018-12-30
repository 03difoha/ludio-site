<template>
  <div>
    <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>    
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             @ok="handleOk"
             :title="title"
             @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="email" autocapitalize="off" autocorrect="off" name="EMAIL" size="25" value="" placeholder="Enter your email" v-model="email"></b-form-input>
      </form>
    </b-modal>
    </div>   
</template>

<script>
export default {
  data () {
    return {
      email: '',
      title: 'Like to follow updates with Ludio?'
    }
  },
  
  methods: {
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.email) {
        alert('Please enter your email')
      } else {
        this.handleSubmit()
      }
    },
    clearName(){},
    handleSubmit () {
      // POST /someUrl
      console.log(this.email)
      this.$http.post('https://cors-anywhere.herokuapp.com/https://xyz.us7.list-manage.com/subscribe/post-json?u=fb66abc77bce32858a9bdf813&amp;id=67afc8c3d2&c=?',
      {body: JSON.stringify({ 'EMAIL': this.email })})
    }
  }
}
</script>

<!-- modal-prevent-1.vue -->



    
